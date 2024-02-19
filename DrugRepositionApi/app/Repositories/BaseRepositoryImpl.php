<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Exceptions\RepositoryException;

abstract class BaseRepositoryImpl extends BaseRepository
{
    /**
     * Find data by id
     *
     * @param array|numeric|string $id
     * @param array $columns
     *
     * @return mixed
     * @throws RepositoryException
     */
    public function find($id, $columns = ['*'])
    {
        $this->applyCriteria();
        $this->applyScope();
        $model = $this->model->find($id, $columns);
        $this->resetModel();

        return $this->parserResult($model);
    }

    /**
     * Find data by id
     *
     * @param array|numeric|string $id
     * @param array $columns
     *
     * @return mixed
     */
    public function findOrFail($id, $columns = ['*'])
    {
        try {
            return parent::find(...func_get_args());
        } catch (ModelNotFoundException $e) {
            $exception = new \App\Exceptions\ModelNotFoundException();
            $exception->setModel(last(explode('\\', get_class($this->model))), $id);
            throw $exception;
        }
    }

    /**
     * Retrieve all data of repository, paginated
     *
     * @param null $limit
     * @param null $page
     * @param array $columns
     * @return mixed
     * @throws \Prettus\Repository\Exceptions\RepositoryException
     */
    public function paginate($limit = null, $page = null, $columns = ['*'])
    {
        $this->applyCriteria();
        $this->applyScope();
        $limit = is_null($limit) ? config('repository.pagination.limit', 15) : $limit;
        $results = $this->model->paginate($limit, $columns, 'page', $page);
        $results->appends(app('request')->query());
        $this->resetModel();

        return $this->parserResult($results);
    }

    public function increment(int $id, string $column, float|int $increment, float|int $oldValue): int
    {
        return $this->makeModel()->newQuery()->where($column, $oldValue)->increment($column, abs($increment));
    }

    public function decrement(int $id, string $column, float|int $decrement, float|int $oldValue): int
    {
        return $this->makeModel()->newQuery()->where($column, $oldValue)->decrement($column, $decrement);
    }
}
