<?php

namespace App\Repositories\Impl;

use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DrugDiseaseOmimRepository;
use App\Entities\DrugDiseaseOmimEntity;

/**
 * Class DrugDiseaseOmimRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DrugDiseaseOmimRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements DrugDiseaseOmimRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DrugDiseaseOmimEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

}
