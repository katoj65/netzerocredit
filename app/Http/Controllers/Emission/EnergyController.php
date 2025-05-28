<?php

namespace App\Http\Controllers\Emission;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnergyController extends Controller
{
    //


public function energy(){
$data['title']='energy';
$data['response']=[];
return Inertia::render('Emissions/Energy',$data);
}





}
