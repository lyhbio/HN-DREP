<?php

namespace App\Repositories\Impl;

use App\Entities\DiseaseMedgenEntity;
use App\Repositories\DiseaseMedgenRepository;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class DiseaseMedgenRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DiseaseMedgenRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements DiseaseMedgenRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DiseaseMedgenEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function getByMedgenId(string $medgenId): ?DiseaseMedgenEntity
    {
        return $this->getModel()->newQuery()->where('medgen_id', $medgenId)->firstOrFail();;
    }
}
