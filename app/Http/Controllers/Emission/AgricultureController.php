<?php

namespace App\Http\Controllers\Emission;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\FarmModel;
use App\Http\Resources\FarmResource;
use App\Models\EmissionSectorModel;
use App\Http\Resources\EmissionSectorProfileResource;

class AgricultureController extends Controller
{
    //



public function agriculture(Request $request){
$sector=new EmissionSectorProfileResource(EmissionSectorModel::select('id','name')->where('name',$request->segment(2))->first());
$data['title']='agriculture';
$data['response']=[
'sector'=>$sector,
'farm'=>FarmResource::collection(FarmModel::all()),

];
return Inertia::render('Emissions/Agriculture',$data);
}








}
