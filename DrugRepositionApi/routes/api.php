<?php

use Illuminate\Support\Facades\Route;

if (!request()->headers->get('accept')) {
    request()->headers->set('accept', 'application/json');
}
Route::middleware(['api'])->namespace('App\Http\Controllers\V1')->prefix('v1/')->group(function () {
    Route::get('statistics', 'StatisticsController@statistics');
    Route::get('dataset', 'DatasetController@show');
    Route::get('datasets', 'DatasetController@datasets');
    Route::get('method', 'MethodController@show');
    Route::get('methods', 'MethodController@methods');
    Route::get('drug/suggest', 'DrugController@suggest');
    Route::get('drug/{drugbank_id}', 'DrugController@detail');
    Route::get('disease/suggest', 'DiseaseController@suggest');
    Route::get('disease/{disease_id}', 'DiseaseController@detail');
    Route::post('diseases', 'DiseaseController@diseases');
    Route::post('search', 'SearchController@search');
    Route::get('method-dataset', 'MethodDatasetController@all');
    Route::get('download', 'DownloadController@downloadFolder');
    Route::get('download/files', 'DownloadController@files');
});

