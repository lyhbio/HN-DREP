<?php

namespace App\Component\SoftDelete;

/**
 * Class SoftDeleteScope
 *
 * @package Applications\Util
 */
trait SoftDeleteScope
{
    use \Illuminate\Database\Eloquent\SoftDeletes;

    /**
     * Boot the soft deleting trait for a model.
     *
     * @return void
     */
    public static function bootSoftDeletes()
    {
        static::addGlobalScope(new SoftDelete);
    }
}

