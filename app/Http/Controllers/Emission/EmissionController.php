<?php

namespace App\Http\Controllers\Emission;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\EmissionSectorModel;
use App\Http\Resources\EmissionSectorResource;

class EmissionController extends Controller
{
    //





public function emissions(){
$data['title']='emissions';
$data['response']=[
'emissions'=>EmissionSectorResource::collection(EmissionSectorModel::all()),
];
return Inertia::render('Emissions',$data);

}




}
