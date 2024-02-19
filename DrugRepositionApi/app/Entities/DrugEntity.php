<?php

/**
 * Created by Reliese Model.
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Drug
 *
 * @property string|null $drugbank_id
 * @property string|null $drug_name
 * @property string|null $type
 * @property string|null $synonyms
 *
 * @package App\Entities
 */
class DrugEntity extends Model
{
    protected $table = 't_drug';
    public $incrementing = false;
    protected $perPage = 10;
    public $timestamps = false;
    public $primaryKey = 'drugbank_id';

    protected $casts = [
        'drugbank_id' => 'string',
        'drug_name' => 'string',
        'type' => 'string',
        'synonyms' => 'string',
        'brand_names' => 'string',
        'weight' => 'string',
        'chemical_formula' => 'string',
        'atc_codes' => 'string',
        'targets' => 'string',
        'smiles' => 'string',
    ];

    protected $fillable = [
        'drugbank_id',
        'drug_name',
        'type',
        'synonyms',
        'brand_names',
        'weight',
        'chemical_formula',
        'atc_codes',
        'targets',
        'smiles',
    ];

    public function getDrugbankIdAttribute(?string $value): string
    {
        return (string)$value;
    }

    public function setDrugbankIdAttribute(string $value)
    {
        $this->attributes['drugbank_id'] = $value;
    }

    public function getDrugNameAttribute(?string $value): string
    {
        return (string)$value;
    }

    public function setDrugNameAttribute(string $value)
    {
        $this->attributes['drug_name'] = $value;
    }

    public function getTypeAttribute(?string $value): ?string
    {
        return (string)$value;
    }

    public function setTypeAttribute(?string $value)
    {
        $this->attributes['type'] = $value;
    }

    public function getSynonymsAttribute(?string $value): ?string
    {
        return (string)$value;
    }

    public function setSynonymsAttribute(?string $value)
    {
        $this->attributes['synonyms'] = $value;
    }

    public function getBrandNamesAttribute(?string $value): ?string
    {
        return (string)$value;
    }

    public function setBrandNamesAttribute(?string $value)
    {
        $this->attributes['brand_names'] = $value;
    }

    public function getWeightAttribute(?string $value): string
    {
        return (string)$value;
    }

    public function setWeightAttribute(?string $value)
    {
        $this->attributes['weight'] = $value;
    }

    public function getChemicalFormulaAttribute(?string $value): ?string
    {
        return (string)$value;
    }

    public function setChemicalFormulaAttribute(?string $value)
    {
        $this->attributes['chemical_formula'] = $value;
    }

    public function getAtcCodesAttribute(?string $value): ?string
    {
        return (string)$value;
    }

    public function setAtcCodesAttribute(?string $value)
    {
        $this->attributes['atc_codes'] = $value;
    }

    public function getTargetsAttribute(?string $value): ?string
    {
        return (string)$value;
    }

    public function setTargetsAttribute(?string $value)
    {
        $this->attributes['targets'] = $value;
    }

    public function getSmilesAttribute(?string $value): string
    {
        return (string)$value;
    }

    public function setSmilesAttribute(?string $value)
    {
        $this->attributes['smiles'] = $value;
    }
}
