<?php

namespace App\Repositories\Impl;

use App\Entities\MethodEntity;
use App\Repositories\MethodRepository;
use Illuminate\Support\Collection;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class MethodRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class MethodRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements MethodRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return MethodEntity::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function getByMethod(string $methodName): ?MethodEntity
    {
        return $this->getModel()->newQuery()
            ->where('method_name', $methodName)
            ->first();
    }

    public function getMethodNames(): array
    {
        return $this->getModel()->newQuery()
            ->selectRaw('distinct(method_name) as method_name')
            ->get()
            ->toArray();
    }
}
