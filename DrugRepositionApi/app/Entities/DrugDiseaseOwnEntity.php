<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DrugDiseaseOwn
 *
 * @property string|null $drugbank_id
 * @property string|null $disease_id
 * @property string|null $score
 * @property string|null $method
 * @property string|null $dataset
 *
 * @package App\Entities
 */
class DrugDiseaseOwnEntity extends Model
{
	protected $table = 't_drug_disease_own';
	public $incrementing = false;
	protected $perPage = 10;
	public $timestamps = false;

	protected $fillable = [
		'drugbank_id',
		'disease_id',
		'score',
		'method',
		'dataset'
	];
}
