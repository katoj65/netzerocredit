<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Verifier\VerifierAccount;




Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

Route::prefix('verifier')->group(function(){

Route::get('create-farmer', [VerifierAccount::class, 'createFarmerAccount'])->name('verifier.create_farmer');
Route::post('verifier/create-farmer',[VerifierAccount::class,'postCreateFarmerForm'])->name('post.farmer');
Route::get('new-farmer-profile/{id}', [VerifierAccount::class, 'createFarmerProfile'])->name('verifier.create_farmer_profile');
Route::post('create-farmer-profile',[VerifierAccount::class,'postFarmDetails'])->name('verifier.create-farmer-profile');
Route::get('farm/{id}',[VerifierAccount::class,'farmConfirmation'])->name('verifier-farm-confirmation');
Route::put('update/farm-status',[VerifierAccount::class,'updateVerificationStatus'])->name('update_farm_status');




});






});


