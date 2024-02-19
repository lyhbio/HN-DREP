<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DiseaseOmim
 *
 * @property string|null $omim_id
 * @property string|null $disease_name
 * @property string|null $synonyms
 *
 * @package App\Entities
 */
class DiseaseOmimEntity extends Model
{
    protected $table = 't_disease_omim';
    public $incrementing = false;
    protected $perPage = 10;
    public $timestamps = false;

    protected $fillable = [
        'omim_id',
        'disease_name',
        'synonyms',
        'mesh_id',
        'do_id',
        'definition',
        'slimmappings',
    ];
}
