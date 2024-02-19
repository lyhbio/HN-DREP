<?php

namespace App\Repositories;

use App\Entities\DatasetEntity;

/**
 * Interface DatasetRepository.
 *
 * @package namespace App\Repositories;
 */
interface DatasetRepository extends BaseRepositoryInterface
{
    public function getByName(string $datasetName): ?DatasetEntity;
}
