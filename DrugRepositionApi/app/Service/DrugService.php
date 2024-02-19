<?php

namespace App\Service;

use App\Entities\DrugEntity;
use App\Repositories\DrugRepository;
use Illuminate\Support\Collection;

class DrugService
{
    public function __construct(
        private DrugRepository $drugRepo
    )
    {
    }

    public function suggest(string $keywords): Collection
    {
        return $this->drugRepo->matchByKeywords($keywords, ['drug_name', 'drugbank_id'])
            ->slice(0, 10)
            ->map(fn(DrugEntity $drugEntity) => $drugEntity->only(['drugbank_id', 'drug_name']));
    }

    public function detail(string $drugBankId): array
    {
        $drugEntity = $this->drugRepo->findOrFail($drugBankId);
        $d2Path = sprintf('app/public/images/drugbank_2d_3d/2D/svg/%s.svg', mb_strtoupper($drugEntity->drugbank_id));
        $d3Path = sprintf('app/public/images/drugbank_2d_3d/3D/sdf/%s.sdf', mb_strtoupper($drugEntity->drugbank_id));
        return [
            'drugbank_id' => $drugEntity->drugbank_id,
            'drug_name' => $drugEntity->drug_name,
            'type' => $drugEntity->type,
            'synonyms' => $drugEntity->synonyms,
            'brand_names' => $drugEntity->brand_names,
            'weight' => $drugEntity->weight,
            'chemical_formula' => $drugEntity->chemical_formula,
            'atc_codes' => $drugEntity->atc_codes,
            'targets' => $drugEntity->targets,
            'smiles' => $drugEntity->smiles,
            'd2_structure' =>
                file_exists(storage_path($d2Path))
                    ? asset(sprintf('/storage/images/drugbank_2d_3d/2D/svg/%s.svg', mb_strtoupper($drugEntity->drugbank_id)))
                    : '',
            'd3_structure' =>
                file_exists(storage_path($d3Path))
                    ? file_get_contents(storage_path($d3Path))
                    : '',
        ];
    }
}
