<?php

namespace App\Service;

use App\Entities\DatasetEntity;
use App\Entities\MethodDatasetEntity;
use App\Repositories\DatasetRepository;
use App\Repositories\MethodDatasetRepository;

class DatasetService
{
    public function __construct(
        private DatasetRepository         $datasetRepo
        , private MethodDatasetRepository $methodDatasetRepo
    )
    {
    }

    public function datasets()
    {
        $datasets = $this->datasetRepo->all();
        return $datasets->map(function (DatasetEntity $datasetEntity) {
            return $this->dataset($datasetEntity, '');
        });
    }

    public function getByName(string $datasetName): array
    {
        $datasetEntity = $this->datasetRepo->getByName($datasetName);
        if (!$datasetEntity) {
            return [];
        }
        return $this->dataset($datasetEntity, $datasetName);
    }

    private function dataset(DatasetEntity $datasetEntity, string $datasetName): array
    {
        $methods = collect();
        $datasetEntity->loadMissing('methods.references');
        $methodDatasetEntities = $this->methodDatasetRepo->getByDatasetName($datasetName);
        foreach ($datasetEntity->methods as $methodEntity) {
            $methodDatasetEntity = $methodDatasetEntities->first(
                fn(MethodDatasetEntity $methodDatasetEntity) => $methodEntity->method_name === $methodDatasetEntity->method_name
            );
            $methods->push(
                $methodEntity->only([
                    'method_name', 'network', 'algorithms', 'languages', 'dataset_used', 'code_address', 'method_paper_name', 'ref_id',
                    'category', 'overall', 'performance', 'scalability', 'usability', 'description'
                ])
                + [
                    'time' => 0 < $methodDatasetEntity?->time ? $methodDatasetEntity?->time : null,
                    'time_human' => (string)$methodDatasetEntity?->time_human,
                    'memory' => (string)$methodDatasetEntity?->memory,
                    'memory_human' => (string)$methodDatasetEntity?->memory_human,

                    //'time', 'time_human', 'memory', 'memory_human'

                    'auc' => 0 < $methodDatasetEntity?->auc ? $methodDatasetEntity?->auc : null,
                    'aupr' => 0 < $methodDatasetEntity?->aupr ? $methodDatasetEntity?->aupr : null,
                    'f1' => 0 < $methodDatasetEntity?->f1 ? $methodDatasetEntity?->f1 : null,
                    'workflow' => asset(sprintf('/storage/images/workflow/%s.png', mb_strtolower($methodEntity->method_name))),
                    'auc_curve' => asset(sprintf(
                        '/storage/images/auc_aupr/%s/%s_%s_auroc.png'
                        , mb_strtolower($methodEntity->method_name)
                        , mb_strtolower($methodEntity->method_name)
                        , mb_strtolower($methodDatasetEntity?->dataset_name)
                    )),
                    'aupr_curve' => asset(sprintf(
                        '/storage/images/auroc_aupr/%s/%s_%s_aupr.png'
                        , mb_strtolower($methodEntity->method_name)
                        , mb_strtolower($methodEntity->method_name)
                        , mb_strtolower($methodDatasetEntity?->dataset_name)
                    )),
                ]
            );
        }
        return array_merge(
            $datasetEntity->only(['dataset_name', 'drug_num', 'disease_num', 'drug_disease_associations', 'paper', 'ref_id'])
            , [
                'methods' => $methods->values()->toArray(),
                'references' => collect(data_get($datasetEntity, 'methods.*.references.*'))
                    ->merge($datasetEntity->references)
                    ->unique('ref_id')
                    ->values()
                    ->toArray(),
            ]
        );
    }
}
