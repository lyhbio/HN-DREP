<?php

namespace App\Service;

use App\Entities\DrugDiseaseEntity;
use App\Http\Dto\V1\DrugDiseaseSearchDto;
use App\Repositories\DrugDiseaseRepository;
use Illuminate\Support\Collection;

class DrugDiseaseService
{
    public function __construct(
        private DrugDiseaseRepository $drugDiseaseRepo
    )
    {
    }

    /**
     * @param \App\Http\Dto\V1\DrugDiseaseSearchDto $drugSearchDto
     * @return \Illuminate\Support\Collection
     * @throws \Exception
     */
    public function search(DrugDiseaseSearchDto $drugSearchDto): Collection
    {
        return $this->searchFromEs($drugSearchDto);
    }

    public function searchFromEs(DrugDiseaseSearchDto $drugSearchDto)
    {
        $filters = [];
        if ($drugSearchDto->getDrugbankId()) {
            $filters[] = ['drugbank_id' => $drugSearchDto->getDrugbankId()];
        }
        if ($drugSearchDto->getDiseaseId()) {
            $filters[] = ['disease_id' => $drugSearchDto->getDiseaseId()];
        }
        if ($drugSearchDto->getDiseaseName()) {
            $filters[] = ['disease_name' => $drugSearchDto->getDiseaseName()];
        }
        if ($drugSearchDto->getMethodName()) {
            $filters[] = ['method_name' => $drugSearchDto->getMethodName()];
        }
        if ($drugSearchDto->getDatasetName()) {
            $filters[] = ['dataset_name' => $drugSearchDto->getDatasetName()];
        }
        $query = [
            'index' => 'drug_disease',
            'body' => [
                'size' => 0,
                'query' => [
                    'bool' => [
                        'filter' => array_map(function (array $filter) {
                            return ['term' => [key($filter) => current($filter)]];
                        }, $filters),
                    ],
                ],
                'aggs' => [
                    'group_by_field' => [
                        'terms' => [
                            'field' => $drugSearchDto->getGroupField(),
                            'size' => 10000, // 要获取多少个不同的 method_name 分组
                            'order' => ['max_score' => 'desc'], // 按照 max_score 降序排序
                        ],
                        'aggs' => [
                            'max_score' => ['max' => ['field' => 'score']], // 获取每个组的最大 score 值
                            'top_hits_data' => [
                                'top_hits' => [
                                    'sort' => [['score' => ['order' => 'desc']]],
                                    'size' => 100,
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ];
        $results = \Elasticsearch::connection()->search($query);
        return collect(
            \data_get($results, 'aggregations.group_by_field.buckets.*.top_hits_data.hits.hits.*._source')
        )->map(fn(array $row) => new DrugDiseaseEntity($row));
    }
}
