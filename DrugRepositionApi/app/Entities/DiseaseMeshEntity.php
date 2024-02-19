<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DiseaseMesh
 *
 * @property string|null $mesh_id
 * @property string|null $disease_name
 * @property string|null $synonyms
 * @property string|null $definition
 * @property string|null $tree_numbers
 *
 * @package App\Entities
 */
class DiseaseMeshEntity extends Model
{
	protected $table = 't_disease_mesh';
	public $incrementing = false;
	protected $perPage = 10;
	public $timestamps = false;

	protected $fillable = [
        'mesh_id',
        'disease_name',
        'synonyms',
        'tree_numbers',
        'omim_id',
        'do_id',
        'definition',
        'slimmappings',
	];
}
