<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DrugDiseaseMesh
 *
 * @property string|null $drugbank_id
 * @property string|null $mesh_id
 * @property string|null $score
 * @property string|null $method
 * @property string|null $dataset
 *
 * @package App\Entities
 */
class DrugDiseaseMeshEntity extends Model
{
	protected $table = 't_drug_disease_mesh';
	public $incrementing = false;
	protected $perPage = 10;
	public $timestamps = false;

	protected $fillable = [
		'drugbank_id',
		'mesh_id',
		'score',
		'method',
		'dataset'
	];
}
