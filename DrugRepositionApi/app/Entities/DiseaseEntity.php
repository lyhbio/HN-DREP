<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Disease
 *
 * @property int $id
 * @property string|null $disease_id
 * @property string|null $disease_name
 * @property string|null $disease_from
 * @property string|null $synonyms
 *
 * @package App\Entities
 */
class DiseaseEntity extends Model
{
    protected $table = 'drug_reposition.t_disease';
    protected $primaryKey = 'id';
    protected $perPage = 10;
    public $timestamps = false;

    protected $fillable = [
        'disease_id',
        'disease_name',
        'disease_from',
        'synonyms',
    ];
}
