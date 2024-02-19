<?php

namespace App\Repositories;

use App\Entities\DiseaseMeshEntity;

/**
 * Interface DiseaseMeshRepository.
 *
 * @package namespace App\Repositories;
 */
interface DiseaseMeshRepository extends \App\Repositories\BaseRepositoryInterface
{
    public function getByMeshId(string $meshesId): ?DiseaseMeshEntity;
}
