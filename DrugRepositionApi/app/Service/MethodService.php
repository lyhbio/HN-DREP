<?php

namespace App\Service;

use App\Entities\DatasetEntity;
use App\Entities\MethodEntity;
use App\Repositories\MethodRepository;

class MethodService
{
    public function __construct(private MethodRepository $methodRepo)
    {
    }

    public function methods()
    {
        $methodEntities = $this->methodRepo->all();
        $methodEntities->loadMissing('datasets', 'datasets.references');
        return $methodEntities->map(function (MethodEntity $methodEntity) {
            return $this->method($methodEntity, '');
        });
    }

    public function getByMethodAndDataset(string $methodName, string $datasetName): array
    {
        $methodEntity = $this->methodRepo->getByMethod($methodName);
        $methodEntity->loadMissing('datasets', 'datasets.references');
        return $this->method($methodEntity, $datasetName);
    }

    private function method(MethodEntity $methodEntity, $datasetName): array
    {
        return array_merge(
            $methodEntity->only([
                'method_name', 'network', 'algorithms', 'languages', 'dataset_used', 'code_address', 'method_paper_name', 'ref_id',
                'category', 'overall', 'performance', 'scalability', 'usability', 'description',
            ])
            + [
                'workflow' => asset(sprintf('/storage/images/workflow/%s.png', mb_strtolower($methodEntity->method_name))),
                'references' => $methodEntity->datasets
                    ->filter(
                        fn(DatasetEntity $datasetEntity) => !$datasetName || $datasetEntity->dataset_name === $datasetName
                    )->map(
                        fn(DatasetEntity $datasetEntity) => $datasetEntity->references
                    )
                    ->collapse()
                    ->merge($methodEntity->references->all())
                    ->filter()
                    ->unique('ref_id')
                    ->values()
                    ->toArray(),
                'datasets' => $methodEntity->datasets
                    ->filter(
                        fn(DatasetEntity $datasetEntity) => !$datasetName || $datasetEntity->dataset_name === $datasetName
                    )
                    ->map(
                        fn(DatasetEntity $datasetEntity) => $datasetEntity->only(
                                ['dataset_name', 'drug_num', 'disease_num', 'drug_disease_associations', 'paper', 'ref_id']
                            )
                            + [
                                'f1' => 0 < $datasetEntity->pivot?->f1 ? $datasetEntity->pivot?->f1 : null,
                                'auc' => 0 < $datasetEntity->pivot?->auc ? $datasetEntity->pivot?->auc : null,
                                'aupr' => 0 < $datasetEntity->pivot?->aupr ? $datasetEntity->pivot?->aupr : null,
                                'time' => 0 < $datasetEntity->pivot?->time ? $datasetEntity->pivot?->time : null,
                                'memory' => 0 < $datasetEntity->pivot?->memory ? $datasetEntity->pivot?->memory : null,
                                'time_human' => 0 < $datasetEntity->pivot?->time_human ? $datasetEntity->pivot?->time_human : '',
                                'memory_human' => 0 < $datasetEntity->pivot?->memory_human ? $datasetEntity->pivot?->memory_human : '',
                                'auc_curve' => asset(sprintf(
                                    '/storage/images/auroc_aupr/%s/%s_%s_auroc.png'
                                    , mb_strtolower($methodEntity->method_name)
                                    , mb_strtolower($methodEntity->method_name)
                                    , mb_strtolower($datasetEntity->dataset_name)
                                )),
                                'aupr_curve' => asset(sprintf(
                                    '/storage/images/auroc_aupr/%s/%s_%s_aupr.png'
                                    , mb_strtolower($methodEntity->method_name)
                                    , mb_strtolower($methodEntity->method_name)
                                    , mb_strtolower($datasetEntity->dataset_name)
                                )),
                            ]
                    )->values(),
            ]
        );
    }

}
