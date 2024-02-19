<?php

namespace App\Service;

use App\Entities\DiseaseEntity;
use App\Entities\DrugDiseaseEntity;
use App\Repositories\DiseaseMedgenRepository;
use App\Repositories\DiseaseMeshRepository;
use App\Repositories\DiseaseOmimRepository;
use App\Repositories\DiseaseOwnRepository;
use App\Repositories\DiseaseRepository;
use Illuminate\Support\Collection;
use JetBrains\PhpStorm\ArrayShape;

class DiseaseService
{
    public function __construct(
        private DiseaseRepository       $diseaseRepo,
        private DiseaseMedgenRepository $diseaseMedgenRepo,
        private DiseaseMeshRepository   $diseaseMeshRepo,
        private DiseaseOmimRepository   $diseaseOmimRepository,
        private DiseaseOwnRepository    $diseaseOwnRepository,
    )
    {
    }

    public function suggest(string $keywords): Collection
    {
        return $this->diseaseRepo->matchByKeywords($keywords)
            ->slice(0, 100)
            ->map(
                fn(DiseaseEntity $diseaseEntity) => $diseaseEntity->only(['disease_id', 'disease_name', 'disease_from'])
            );
    }

    #[ArrayShape(['medgen_id' => "string", 'disease_name' => "string", 'mesh_id' => "string", 'omim_id' => "string", 'do_id' => "string", 'definition' => "string", 'synonyms' => "string", 'slimmappings' => "string"])]
    public function detail(string $diseaseId): array
    {
        $diseaseEntity = $this->diseaseRepo->getByDiseaseId($diseaseId);
        $realDiseaseEntity = null;
        switch ($diseaseEntity->disease_from) {
            case 'medgen':
                $realDiseaseEntity = $this->diseaseMedgenRepo->getByMedgenId($diseaseEntity->disease_id);
                break;
            case 'mesh':
                $realDiseaseEntity = $this->diseaseMeshRepo->getByMeshId($diseaseEntity->disease_id);
                break;
            case 'omim':
                $realDiseaseEntity = $this->diseaseOmimRepository->getByOmimId($diseaseEntity->disease_id);
                break;
            case 'own':
                $realDiseaseEntity = $this->diseaseOwnRepository->getByDiseaseId($diseaseEntity->disease_id);
                break;
        }
        return [
            'medgen_id' => (string)$realDiseaseEntity?->medgen_id,
            'disease_name' => (string)$realDiseaseEntity?->disease_name,
            'mesh_id' => (string)$realDiseaseEntity?->mesh_id,
            'omim_id' => (string)$realDiseaseEntity?->omim_id,
            'do_id' => (string)$realDiseaseEntity?->do_id,
            'definition' => (string)$realDiseaseEntity?->definition,
            'synonyms' => (string)$realDiseaseEntity?->synonyms,
            'slimmappings' => (string)$realDiseaseEntity?->slimmappings,
        ];
    }

    public function diseases(array $diseaseNames): Collection
    {
        $diseaseNames = array_filter(array_unique($diseaseNames));
        return collect($diseaseNames)->map(
            fn($diseaseName) => ['term' => ['disease_name.keyword' => $diseaseName]]
        )->chunk(10)->map(function (Collection $diseases) {
            $query = [
                'index' => 'disease',
                'size' => 10000,
                'body' => [
                    'query' => [
                        'bool' => [
                            'should' => $diseases->values()->toArray()
                        ]
                    ]
                ]
            ];
            $results = \Elasticsearch::connection()->search($query);
            return collect(
                \data_get($results, 'hits.hits.*._source')
            )->map(fn(array $row) => new DrugDiseaseEntity($row));
        })->collapse()->unique();
    }

}
