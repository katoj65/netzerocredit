<?php
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Market\CarbonMarketController;


Route::middleware([
'auth:sanctum',
config('jetstream.auth_session'),
'verified',
])->group(function () {

Route::prefix('carbon')->group(function(){
Route::get('markets',[CarbonMarketController::class,'carbonMarkets'])->name('carbon.markets');







});



});