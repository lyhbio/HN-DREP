<?php

namespace App\Repositories\Impl;

use App\Entities\MethodDatasetEntity;
use App\Repositories\BaseRepositoryImpl;
use App\Repositories\MethodDatasetRepository;
use Illuminate\Database\Eloquent\Collection;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class MethodDatasetRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class MethodDatasetRepositoryImpl extends BaseRepositoryImpl implements MethodDatasetRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return MethodDatasetEntity::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function getByMethodAndDatasetName(string $method, string $datasetName): ?MethodDatasetEntity
    {
        return $this->getModel()->newQuery()
            ->where('method_name', $method)
            ->where('dataset_name', $datasetName)
            ->first();
    }

    public function getByDatasetName(string $datasetName): Collection
    {
        return $this->getModel()->newQuery()
            ->where('dataset_name', $datasetName)
            ->get();
    }
}
