<?php

namespace App\Repositories;

use App\Entities\MethodEntity;

/**
 * Interface MethodRepository.
 *
 * @package namespace App\Repositories;
 */
interface MethodRepository extends BaseRepositoryInterface
{
    public function getByMethod(string $methodName): ?MethodEntity;

    public function getMethodNames(): array;
}
