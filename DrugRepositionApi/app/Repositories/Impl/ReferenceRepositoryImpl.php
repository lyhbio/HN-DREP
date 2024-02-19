<?php

namespace App\Repositories\Impl;

use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ReferenceRepository;
use App\Entities\ReferenceEntity;

/**
 * Class ReferenceRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class ReferenceRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements ReferenceRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ReferenceEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

}
