<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Dataset
 *
 * @property string|null $dataset_name
 * @property string|null $drug_num
 * @property string|null $disease_num
 * @property string|null $drug_disease_associations
 * @property string|null $paper
 * @property string|null $ref_id
 * @property-read \Illuminate\Support\Collection|\App\Entities\MethodEntity[] $methods
 * @property-read \Illuminate\Support\Collection|\App\Entities\ReferenceEntity[] $references
 * @package App\Entities
 */
class DatasetEntity extends Model
{
    protected $table = 't_dataset';
    protected $primaryKey = 'dataset_name';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $perPage = 10;
    public $timestamps = false;

    protected $fillable = [
        'dataset_name',
        'drug_num',
        'disease_num',
        'drug_disease_associations',
        'paper',
        'ref_id'
    ];

    protected $casts = [
        'drug_num' => 'integer',
        'disease_num' => 'integer',
        'drug_disease_associations' => 'integer',
        'dataset_name' => 'string',
        'paper' => 'string',
        'ref_id' => 'string',
    ];

    public function methods(): BelongsToMany
    {
        return $this->belongsToMany(MethodEntity::class, (new MethodDatasetEntity())->getTable(), 'dataset_name', 'method_name')
            ->withPivot('f1', 'aupr', 'auc', 'time', 'time_human', 'memory', 'memory_human');
    }

    public function references(): HasMany
    {
        return $this->hasMany(ReferenceEntity::class, 'ref_id', 'ref_id');
    }

    public function getDatasetNameAttribute($value)
    {
        return trim((string)$value);
    }

    public function setDatasetNameAttribute($value)
    {
        $this->attributes['dataset_name'] = (string)$value;
    }

    public function getDrugNumAttribute($value)
    {
        return (int)$value;
    }

    public function setDrugNumAttribute($value)
    {
        $this->attributes['drug_num'] = (int)$value;
    }

    public function getDiseaseNumAttribute($value)
    {
        return (int)$value;
    }

    public function setDiseaseNumAttribute($value)
    {
        $this->attributes['disease_num'] = (int)$value;
    }

    public function getDrugDiseaseAssociationsAttribute($value)
    {
        return (int)$value;
    }

    public function setDrugDiseaseAssociationsAttribute($value)
    {
        $this->attributes['drug_disease_associations'] = (int)$value;
    }

    public function getPaperAttribute($value)
    {
        return (string)$value;
    }

    public function setPaperAttribute($value)
    {
        $this->attributes['paper'] = (string)$value;
    }

    public function getRefIdAttribute($value)
    {
        return (string)$value;
    }

    public function setRefIdAttribute($value)
    {
        $this->attributes['ref_id'] = (string)$value;
    }
}
