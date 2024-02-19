<?php

namespace App\Providers;

use App\Enum\Common\EnvEnum;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RepositoryServiceProvider::class);
        $this->app->register(BusinessServiceProvider::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        date_default_timezone_set(config('app.timezone'));
        if (App::environment(EnvEnum::local->value)) {
            error_reporting(E_ALL);
        } else {
            error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING ^ E_DEPRECATED);
        }
    }
}
