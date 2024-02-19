<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DrugDiseaseOmim
 *
 * @property string|null $drugbank_id
 * @property string|null $omim_id
 * @property string|null $score
 * @property string|null $method
 * @property string|null $dataset
 *
 * @package App\Entities
 */
class DrugDiseaseOmimEntity extends Model
{
	protected $table = 't_drug_disease_omim';
	public $incrementing = false;
	protected $perPage = 10;
	public $timestamps = false;

	protected $fillable = [
		'drugbank_id',
		'omim_id',
		'score',
		'method',
		'dataset'
	];
}
