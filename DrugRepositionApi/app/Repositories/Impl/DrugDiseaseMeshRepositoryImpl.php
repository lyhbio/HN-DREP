<?php

namespace App\Repositories\Impl;

use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DrugDiseaseMeshRepository;
use App\Entities\DrugDiseaseMeshEntity;

/**
 * Class DrugDiseaseMeshRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DrugDiseaseMeshRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements DrugDiseaseMeshRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DrugDiseaseMeshEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

}
