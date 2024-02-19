<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Reference
 *
 * @property string|null $ref_id
 * @property string|null $title
 * @property string|null $url
 * @property string|null $pmid
 *
 * @package App\Entities
 */
class ReferenceEntity extends Model
{
    protected $table = 't_reference';
    public $incrementing = false;
    protected $perPage = 10;
    public $timestamps = false;

    protected $fillable = [
        'ref_id',
        'title',
        'url',
        'pmid'
    ];
    protected $casts = [
        'ref_id' => 'string',
        'title' => 'string',
        'url' => 'string',
        'pmid' => 'integer',
    ];
}
