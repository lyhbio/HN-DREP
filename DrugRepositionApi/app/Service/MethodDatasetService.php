<?php

namespace App\Service;

use App\Repositories\DatasetRepository;
use App\Repositories\MethodDatasetRepository;
use App\Repositories\MethodRepository;
use JetBrains\PhpStorm\ArrayShape;

class MethodDatasetService
{
    public function __construct(
        private MethodDatasetRepository $methodDatasetRepo
        , private DatasetRepository     $datasetRepo
        , private MethodRepository      $methodRepo
    )
    {
    }

    #[ArrayShape(['datasets' => "mixed", 'methods' => "mixed", 'methods_datasets' => "mixed"])]
    public function getMethodsDatasets(): array
    {
        return [
            'datasets' => $this->datasetRepo->all()->pluck('dataset_name')->unique()->values()->toArray(),
            'methods' => $this->methodRepo->all()->pluck('method_name')->unique()->values()->toArray(),
            'methods_datasets' => $this->methodDatasetRepo->all()->values()->toArray(),
        ];
    }
}
