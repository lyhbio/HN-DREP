<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DiseaseOwn
 *
 * @property string|null $disease_id
 * @property string|null $disease_name
 *
 * @package App\Entities
 */
class DiseaseOwnEntity extends Model
{
    protected $table = 't_disease_own';
    public $incrementing = false;
    protected $perPage = 10;
    public $timestamps = false;

    protected $fillable = [
        'disease_id',
        'disease_name',
        'mesh_id',
        'omim_id',
        'do_id',
        'definition',
        'synonyms',
        'slimmappings',
    ];
}
