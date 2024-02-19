<?php

namespace App\Providers;

use App\Repositories\DatasetRepository;
use App\Repositories\DiseaseMedgenRepository;
use App\Repositories\DiseaseMeshRepository;
use App\Repositories\DiseaseOmimRepository;
use App\Repositories\DiseaseOwnRepository;
use App\Repositories\DiseaseRepository;
use App\Repositories\DrugDiseaseMedgenRepository;
use App\Repositories\DrugDiseaseMeshRepository;
use App\Repositories\DrugDiseaseOmimRepository;
use App\Repositories\DrugDiseaseOwnRepository;
use App\Repositories\DrugDiseaseRepository;
use App\Repositories\DrugRepository;
use App\Repositories\Impl\DatasetRepositoryImpl;
use App\Repositories\Impl\DiseaseMedgenRepositoryImpl;
use App\Repositories\Impl\DiseaseMeshRepositoryImpl;
use App\Repositories\Impl\DiseaseOmimRepositoryImpl;
use App\Repositories\Impl\DiseaseOwnRepositoryImpl;
use App\Repositories\Impl\DiseaseRepositoryImpl;
use App\Repositories\Impl\DrugDiseaseMedgenRepositoryImpl;
use App\Repositories\Impl\DrugDiseaseMeshRepositoryImpl;
use App\Repositories\Impl\DrugDiseaseOmimRepositoryImpl;
use App\Repositories\Impl\DrugDiseaseOwnRepositoryImpl;
use App\Repositories\Impl\DrugDiseaseRepositoryImpl;
use App\Repositories\Impl\DrugRepositoryImpl;
use App\Repositories\Impl\MethodDatasetRepositoryImpl;
use App\Repositories\Impl\MethodRepositoryImpl;
use App\Repositories\MethodDatasetRepository;
use App\Repositories\MethodRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(DatasetRepository::class, DatasetRepositoryImpl::class);
        $this->app->bind(MethodDatasetRepository::class, MethodDatasetRepositoryImpl::class);
        $this->app->bind(MethodRepository::class, MethodRepositoryImpl::class);
        $this->app->bind(DiseaseMedgenRepository::class, DiseaseMedgenRepositoryImpl::class);
        $this->app->bind(DiseaseMeshRepository::class, DiseaseMeshRepositoryImpl::class);
        $this->app->bind(DiseaseOmimRepository::class, DiseaseOmimRepositoryImpl::class);
        $this->app->bind(DiseaseOwnRepository::class, DiseaseOwnRepositoryImpl::class);
        $this->app->bind(DrugDiseaseMedgenRepository::class, DrugDiseaseMedgenRepositoryImpl::class);
        $this->app->bind(DrugDiseaseMeshRepository::class, DrugDiseaseMeshRepositoryImpl::class);
        $this->app->bind(DrugDiseaseOmimRepository::class, DrugDiseaseOmimRepositoryImpl::class);
        $this->app->bind(DrugDiseaseOwnRepository::class, DrugDiseaseOwnRepositoryImpl::class);
        $this->app->bind(DrugRepository::class, DrugRepositoryImpl::class);
        $this->app->bind(DrugDiseaseRepository::class, DrugDiseaseRepositoryImpl::class);
        $this->app->bind(DiseaseRepository::class, DiseaseRepositoryImpl::class);
        //:end-bindings:
    }
}
