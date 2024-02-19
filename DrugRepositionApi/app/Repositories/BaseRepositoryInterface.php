<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Exceptions\RepositoryException;

interface BaseRepositoryInterface extends RepositoryInterface
{
    /**
     * Returns the current Model instance
     *
     * @return Model
     */
    public function getModel();

    /**
     * @return Model
     * @throws RepositoryException
     */
    public function makeModel();

    /**
     * Find data by id
     *
     * @param array|numeric|string $id
     * @param array $columns
     *
     * @return mixed
     */
    public function findOrFail($id, $columns = ['*']);

    public function increment(int $id, string $column, float|int $increment, float|int $oldValue): int;

    public function decrement(int $id, string $column, float|int $decrement, float|int $oldValue): int;

    public function paginate($limit = null, $page = null, $columns = ['*']);

    /**
     * Count results of repository
     *
     * @param array $where
     * @param string $columns
     *
     * @return int
     */
    public function count(array $where = [], $columns = '*');
}
