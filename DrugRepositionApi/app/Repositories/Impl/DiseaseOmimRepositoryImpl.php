<?php

namespace App\Repositories\Impl;

use App\Entities\DiseaseOmimEntity;
use App\Repositories\BaseRepositoryImpl;
use App\Repositories\DiseaseOmimRepository;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class DiseaseOmimRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DiseaseOmimRepositoryImpl extends BaseRepositoryImpl implements DiseaseOmimRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DiseaseOmimEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function getByOmimId(string $omimId): ?DiseaseOmimEntity
    {
        return $this->getModel()->newQuery()->where('omim_id', $omimId)->firstOrFail();
    }
}
