<?php

namespace App\Component\SoftDelete;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SoftDelete extends SoftDeletingScope
{

    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param Builder $builder
     * @param Model $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        $builder->where(function (Builder $builder) use ($model) {
            $column = $model->getQualifiedDeletedAtColumn();
            $builder->where($column, '1970-01-01 08:00:00');
        });
    }
}
