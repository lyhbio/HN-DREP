<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Method
 *
 * @property int $id
 * @property string|null $method_name
 * @property string|null $method_paper_name
 * @property string|null $network
 * @property string|null $algorithms
 * @property string|null $languages
 * @property string|null $dataset_used
 * @property string|null $code_address
 * @property string|null $ref_id
 * @property-read \Illuminate\Support\Collection|\App\Entities\ReferenceEntity[] $references
 * @property-read \Illuminate\Support\Collection|\App\Entities\DatasetEntity[] $datasets
 * @package App\Entities
 */
class MethodEntity extends Model
{
    protected $table = 't_method';
    protected $primaryKey = 'method_name';
    protected $keyType = 'string';
    protected $perPage = 10;
    public $timestamps = false;

    protected $fillable = [
        'method_name',
        'method_paper_name',
        'network',
        'algorithms',
        'languages',
        'dataset_used',
        'code_address',
        'ref_id',
        'category',
        'overall',
        'performance',
        'scalability',
        'usability',
        'description',
    ];
    protected $casts = [
        'id' => 'int',
        'method_name' => 'string',
        'method_paper_name' => 'string',
        'network' => 'string',
        'algorithms' => 'string',
        'languages' => 'string',
        'dataset_used' => 'string',
        'code_address' => 'string',
        'ref_id' => 'string',
        'category' => 'string',
        'overall' => 'string',
        'performance' => 'string',
        'scalability' => 'string',
        'usability' => 'string',
        'description' => 'string',
    ];

    public function datasets(): BelongsToMany
    {
        return $this->belongsToMany(
            DatasetEntity::class
            , (new MethodDatasetEntity())->getTable()
            , 'method_name'
            , 'dataset_name'
        )->withPivot('f1', 'aupr', 'auc', 'time', 'memory', 'time_human', 'memory_human');
    }

    public function references(): HasMany
    {
        return $this->hasMany(ReferenceEntity::class, 'ref_id', 'ref_id');
    }

    public function getMethodNameAttribute($value)
    {
        return trim((string)$value);
    }

    public function setMethodNameAttribute($value)
    {
        $this->attributes['method_name'] = (string)$value;
    }

    public function getMethodPaperNameAttribute($value)
    {
        return (string)$value;
    }

    public function setMethodPaperNameAttribute($value)
    {
        $this->attributes['method_paper_name'] = (string)$value;
    }

    public function getNetworkAttribute($value)
    {
        return (string)$value;
    }

    public function setNetworkAttribute($value)
    {
        $this->attributes['network'] = (string)$value;
    }

    public function getAlgorithmsAttribute($value)
    {
        return (string)$value;
    }

    public function setAlgorithmsAttribute($value)
    {
        $this->attributes['algorithms'] = (string)$value;
    }

    public function getLanguagesAttribute($value)
    {
        return (string)$value;
    }

    public function setLanguagesAttribute($value)
    {
        $this->attributes['languages'] = (string)$value;
    }

    public function getDatasetUsedAttribute($value)
    {
        return (string)$value;
    }

    public function setDatasetUsedAttribute($value)
    {
        $this->attributes['dataset_used'] = (string)$value;
    }

    public function getCodeAddressAttribute($value)
    {
        return (string)$value;
    }

    public function setCodeAddressAttribute($value)
    {
        $this->attributes['code_address'] = (string)$value;
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
