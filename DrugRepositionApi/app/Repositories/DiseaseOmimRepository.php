<?php

namespace App\Repositories;

use App\Entities\DiseaseOmimEntity;

/**
 * Interface DiseaseOmimRepository.
 *
 * @package namespace App\Repositories;
 */
interface DiseaseOmimRepository extends \App\Repositories\BaseRepositoryInterface
{
    public function getByOmimId(string $omimId): ?DiseaseOmimEntity;
}
