<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Emission\EnergyController;
use App\Http\Controllers\Emission\AgricultureController;



Route::middleware([
'auth:sanctum',
config('jetstream.auth_session'),
'verified',
])->group(function () {



Route::prefix('emissions')->group(function(){
Route::get('/energy', [EnergyController::class, 'energy'])->name('emissions.energy');
Route::get('/agriculture', [AgricultureController::class, 'agriculture'])->name('emissions.agriculture');
Route::get('/waste', [EnergyController::class, 'energy'])->name('emissions.waste');
Route::get('/land-use', [EnergyController::class, 'energy'])->name('emissions.land-use');
Route::get('/industrialisation', [EnergyController::class, 'energy'])->name('emissions.industrialisation');







});






});


