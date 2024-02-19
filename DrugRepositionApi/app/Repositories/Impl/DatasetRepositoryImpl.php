<?php

namespace App\Repositories\Impl;

use App\Entities\DatasetEntity;
use App\Repositories\BaseRepositoryImpl;
use App\Repositories\DatasetRepository;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class DatasetRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DatasetRepositoryImpl extends BaseRepositoryImpl implements DatasetRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DatasetEntity::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function getByName(string $datasetName): ?DatasetEntity
    {
        return $this->getModel()->newQuery()
            ->where('dataset_name', $datasetName)
            ->first();
    }
}
