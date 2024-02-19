<?php

namespace App\Repositories;

use App\Entities\DiseaseMedgenEntity;

/**
 * Interface DiseaseMedgenRepository.
 *
 * @package namespace App\Repositories;
 */
interface DiseaseMedgenRepository extends BaseRepositoryInterface
{
    public function getByMedgenId(string $medgenId): ?DiseaseMedgenEntity;
}
