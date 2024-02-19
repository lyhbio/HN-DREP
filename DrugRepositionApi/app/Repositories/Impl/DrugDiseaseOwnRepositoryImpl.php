<?php

namespace App\Repositories\Impl;

use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DrugDiseaseOwnRepository;
use App\Entities\DrugDiseaseOwnEntity;

/**
 * Class DrugDiseaseOwnRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DrugDiseaseOwnRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements DrugDiseaseOwnRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DrugDiseaseOwnEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

}
