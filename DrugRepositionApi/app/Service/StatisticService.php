<?php

namespace App\Service;

use App\Repositories\DatasetRepository;
use App\Repositories\DiseaseRepository;
use App\Repositories\DrugDiseaseRepository;
use App\Repositories\DrugRepository;
use App\Repositories\MethodRepository;
use JetBrains\PhpStorm\ArrayShape;

class StatisticService
{
    public function __construct(
        private MethodRepository      $methodRepository,
        private DatasetRepository     $datasetRepository,
        private DrugRepository        $drugRepository,
        private DiseaseRepository     $diseaseRepository,
        private DrugDiseaseRepository $drugDiseaseRepository,
    )
    {
    }

    #[ArrayShape(['method_count' => "int", 'dataset_count' => "int", 'drug_count' => "int", 'disease_count' => "int", 'drug_disease_count' => "int"])]
    public function statistics(): array
    {
        $client = \Elasticsearch::connection();
        return [
            'method_count' => $this->methodRepository->count(),
            'dataset_count' => $this->datasetRepository->count(),
            'drug_count' => $this->drugRepository->count(),
            'disease_count' => \data_get($client->count(['index' => 'disease',]), 'count'),
            'drug_disease_count' => \data_get($client->count(['index' => 'drug_disease',]), 'count'),
        ];
    }
}
