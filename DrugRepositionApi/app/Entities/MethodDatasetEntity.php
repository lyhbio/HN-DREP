<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class MethodDataset
 *
 * @property string|null $method_name
 * @property string|null $dataset_name
 * @property string|null $auc
 * @property string|null $aupr
 * @property string|null $f1
 *
 * @package App\Entities
 */
class MethodDatasetEntity extends Model
{
    protected $table = 't_method_dataset';
    public $incrementing = false;
    protected $perPage = 10;
    public $timestamps = false;

    protected $fillable = [
        'method_name',
        'dataset_name',
        'auc',
        'aupr',
        'f1'
    ];

    protected $casts = [
        'auc' => 'decimal:4',
        'aupr' => 'decimal:4',
        'f1' => 'decimal:4',
    ];

    public function method()
    {
        return $this->belongsTo(MethodEntity::class, 'method_name', 'method_name');
    }

    public function dataset()
    {
        return $this->belongsTo(DatasetEntity::class, 'dataset_name', 'dataset_name');
    }

    // 定义访问器
    public function getAucAttribute($value)
    {
        return 0 < $value ? (string)$value : null;
    }

    public function getAuprAttribute($value)
    {
        return 0 < $value ? (string)$value : null;
    }

    public function getF1Attribute($value)
    {
        return 0 < $value ? (string)$value : null;
    }

    // 定义修改器
    public function setAucAttribute($value)
    {
        $this->attributes['auc'] = (string)$value;
    }

    public function setAuprAttribute($value)
    {
        $this->attributes['aupr'] = (string)$value;
    }

    public function setF1Attribute($value)
    {
        $this->attributes['f1'] = (string)$value;
    }
}
