<?php

namespace App\Repositories\Impl;

use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DrugDiseaseMedgenRepository;
use App\Entities\DrugDiseaseMedgenEntity;

/**
 * Class DrugDiseaseMedgenRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DrugDiseaseMedgenRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements DrugDiseaseMedgenRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DrugDiseaseMedgenEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

}
