<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DiseaseMedgen
 *
 * @property string|null $medgen_id
 * @property string|null $disease_name
 *
 * @package App\Entities
 */
class DiseaseMedgenEntity extends Model
{
    protected $table = 't_disease_medgen';
    public $incrementing = false;
    protected $perPage = 10;
    public $timestamps = false;

    protected $fillable = [
        'medgen_id',
        'disease_name',
        'mesh_id',
        'omim_id',
        'do_id',
        'definition',
        'synonyms',
        'slimmappings',
    ];
}
