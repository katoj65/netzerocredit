<?php

namespace App\Http\Controllers\Market;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarbonMarketController extends Controller
{
    //

public function carbonMarkets(){
$data['title']='';
$data['response']='';
return Inertia::render('Market/CarbonMarkets',$data);
}












}
