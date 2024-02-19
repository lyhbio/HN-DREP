<?php

namespace App\Repositories;

use App\Entities\MethodDatasetEntity;
use Illuminate\Database\Eloquent\Collection;

/**
 * Interface MethodDatasetRepository.
 *
 * @package namespace App\Repositories;
 */
interface MethodDatasetRepository extends BaseRepositoryInterface
{
    public function getByMethodAndDatasetName(string $method, string $datasetName): ?MethodDatasetEntity;

    public function getByDatasetName(string $datasetName): Collection;
}
