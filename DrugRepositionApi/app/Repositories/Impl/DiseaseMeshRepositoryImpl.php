<?php

namespace App\Repositories\Impl;

use App\Entities\DiseaseMeshEntity;
use App\Repositories\DiseaseMeshRepository;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class DiseaseMeshRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DiseaseMeshRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements DiseaseMeshRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DiseaseMeshEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function getByMeshId(string $meshesId): ?DiseaseMeshEntity
    {
        return $this->getModel()->newQuery()->where('mesh_id', $meshesId)->firstOrFail();;
    }
}
