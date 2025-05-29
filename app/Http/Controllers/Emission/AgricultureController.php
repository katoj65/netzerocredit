<?php

namespace App\Http\Controllers\Emission;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\FarmModel;
use App\Http\Resources\FarmListResource;
use App\Models\EmissionSectorModel;
use App\Http\Resources\EmissionSectorProfileResource;
use App\Models\CarbonCreditActivityModel;


class AgricultureController extends Controller
{
    //






public function agriculture(Request $request){
$sector=new EmissionSectorProfileResource(EmissionSectorModel::select('id','name')->where('name',$request->segment(2))->first());
$data['title']='agriculture';
$data['response']=[
'sector'=>$sector,
'farm'=>new FarmListResource(FarmModel::select('*')
->join('users','farm.user_id','=','users.id')
->join('user_profile','users.id','=','user_profile.user_id')
->orderBy('farm.created_at','DESC')
->limit(10)
->get()),
'carbon_credit_activity'=>CarbonCreditActivityModel::where('emission_sector_id',$sector->id)
->orderBy('name','ASC')
->get(),


];
return Inertia::render('Emissions/Agriculture',$data);
}








}
