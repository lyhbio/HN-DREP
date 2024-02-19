<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DrugDiseaseMedgen
 *
 * @property string|null $drugbank_id
 * @property string|null $medgen_id
 * @property string|null $score
 * @property string|null $method
 * @property string|null $dataset
 *
 * @package App\Entities
 */
class DrugDiseaseMedgenEntity extends Model
{
	protected $table = 't_drug_disease_medgen';
	public $incrementing = false;
	protected $perPage = 10;
	public $timestamps = false;

	protected $fillable = [
		'drugbank_id',
		'medgen_id',
		'score',
		'method',
		'dataset'
	];
}
