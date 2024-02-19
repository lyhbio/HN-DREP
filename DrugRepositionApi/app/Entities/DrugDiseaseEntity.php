<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class DrugDisease.
 *
 * @package namespace App\Entities;
 */
class DrugDiseaseEntity extends Model implements Transformable
{
    use TransformableTrait;
    use Searchable;

    protected $indexName = 'drug_disease';
    // 定义 Elasticsearch 映射
    protected $mappingProperties = [
        'id' => ['type' => 'long',],
        'drugbank_id' => ['type' => 'keyword',],
        'drug_name' => ['type' => 'keyword',],
        'disease_id' => ['type' => 'keyword',],
        'disease_name' => ['type' => 'keyword',],
        'synonyms' => ['type' => 'keyword',],
        'disease_from' => ['type' => 'keyword',],
        'score' => ['type' => 'float',],
        'method_name' => ['type' => 'keyword',],
        'dataset_name' => ['type' => 'keyword',],
    ];

    protected $table = 't_drug_disease';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $perPage = 10;
    public $timestamps = false;
    protected static $unguarded = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * 获取与模型关联的索引的名称。
     *
     * @return string
     */
    public function searchableAs(): string
    {
        return 'drug_disease';
    }
}
