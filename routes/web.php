<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Home\HomeController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Search\SearchController;
use App\Http\Controllers\Notification\NotificationController;
use App\Http\Controllers\Emission\EmissionController;



$routes=[
'verifier',
'carbon-market',

];

foreach($routes as $r){
include_once($r.'.php');
}







Route::get('/', function () {
return Inertia::render('Index',['title'=>'index']);
})->name('index');

Route::get('/login',[HomeController::class,'login'])->name('login');
Route::get('/register',[HomeController::class,'register'])->name('register');




Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {


Route::get('/dashboard',[DashboardController::class,'dashboard'])->name('dashboard');
Route::post('/profile/complete-registration',[HomeController::class,'updateUserGenderRole'])->name('register.complete');
Route::get('/search',[SearchController::class,'search'])->name('search');
Route::get('/notification',[NotificationController::class,'notification'])->name('notification');
Route::get('/emissions',[EmissionController::class,'emissions'])->name('emissions');



});








