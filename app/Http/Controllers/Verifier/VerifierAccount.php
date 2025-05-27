<?php

namespace App\Http\Controllers\Verifier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\FarmTypeModel;
use App\Models\FarmLandOwnershipModel;
use App\Models\UserProfileModel;
use Illuminate\Support\Facades\Hash;
use App\Models\SustainablePracticeModel;
use App\Models\SoilConditionModel;
use App\Models\WaterSourceModel;
use App\Models\ClimateChallengeModel;
use App\Models\FarmModel;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\FarmResource;


class VerifierAccount extends Controller
{


public function createFarmerAccount()
{
$data['title']='create account';
$data['response']=[];
return Inertia::render('Verifier/CreateFarmerAccount',$data);
}




public function postCreateFarmerForm(Request $request)
{

//check if the email field is filled to set validation rule
$emailCheckProp=$request->email!=''?'email':'';
$emailCheckVal=$request->email!=''?'unique:users':'';

$validate=$request->validate([
'firstname'=>'required',
'lastname'=>'required',
'tel'=>['required','unique:users'],
$emailCheckProp=>$emailCheckVal,
'gender'=>'required',
'district'=>'required',
'parish'=>'required',
'village'=>'required',
'dob'=>['required','date'],
],['required'=>'*Field is required.*']);

//create user/farmer
$user=User::create([
'firstname'=>$request->firstname,
'lastname'=>$request->lastname,
'tel'=>$request->tel,
'email'=>$request->email==''?$request->tel:$request->email,
'password'=>Hash::make(rand()),
'role'=>'farmer'
]);

//create user profile
UserProfileModel::create([
'user_id'=>$user->id,
'district'=>$request->district,
'parish'=>$request->parish,
'village'=>$request->village,
'dob'=>$request->dob,
'gender'=>$request->gender,
'email'=>$request->email
]);

return redirect()->route('verifier.create_farmer_profile',['id'=>$user->id]);
}





public function createFarmerProfile(Request $request)
{
$data['title']='create profile';
$data['response']=[
'farm_type'=>FarmTypeModel::select('name')->get(),
'ownership'=>FarmLandOwnershipModel::select('name')->get(),
'user'=>User::select('users.firstname',
'users.lastname',
'users.tel',
'users.email',
'user_profile.gender',
'user_profile.dob',
'user_profile.district',
'user_profile.parish',
'user_profile.village',
'users.id',
'users.role',
'users.created_at')
->join('user_profile',
'users.id',
'=',
'user_profile.user_id')
->where('users.id',$request->segment(3))
->first(),
'practices'=>SustainablePracticeModel::select('name')->get(),
'soil'=>SoilConditionModel::select('name')->get(),
'water'=>WaterSourceModel::select('name')->get(),
'challenge'=>ClimateChallengeModel::select('name')->get(),
];

return Inertia::render('Verifier/CreateFarmerProfile',$data);
}




public function postFarmDetails(Request $request)
{
$validate=$request->validate([
'user_id'=>['required','integer'],
'name'=>'required',
'size'=>['required','integer'],
'type'=>'required',
'items'=>'required',
'land'=>'required',
'sustain'=>'required',
'tree'=>['required','integer'],
'animal'=>['required','integer'],
'soil'=>'required',
'water'=>'required',
'climate'=>'required',
'geo'=>'required'
],['required'=>'*Field is required.*']);

//create farm
$farm=FarmModel::create([
'user_id'=>$request->user_id,
'farm_name'=>$request->name,
'farm_size'=>$request->size,
'farm_type'=>$request->type,
'farm_items'=>$request->items,
'land_ownership'=>$request->land,
'sustainable_practice'=>implode(',',$request->sustain),
'num_trees'=>$request->tree,
'num_animals'=>$request->animal,
'soil_quality'=>$request->soil,
'water_source'=>$request->water,
'climate_challenge'=>implode(',',$request->climate),
'geo_location'=>$request->geo,
'verifier_id'=>Auth::user()->id,
]);

return redirect()->route('verifier-farm-confirmation', ['id' =>$farm->id]);;

}




public function farmConfirmation(Request $request)
{
$data['title']='farm';
$data['response']=[
'farm'=>new FarmResource(FarmModel::select(
'users.id',
'users.firstname',
'users.lastname',
'users.tel',
'users.email',
'farm.farm_size',
'farm.farm_name',
'farm.farm_type',
'farm.farm_items',
'farm.land_ownership',
'farm.sustainable_practice',
'farm.num_trees',
'farm.num_animals',
'farm.soil_quality',
'farm.water_source',
'farm.climate_challenge',
'farm.geo_location',
'user_profile.district',
'user_profile.parish',
'user_profile.village',
'user_profile.gender',
'user_profile.dob',
'farm.id as farm_id',
'users.role',
'farm.status'
)
->join('users','users.id','=','farm.user_id')
->join('user_profile','users.id','=','user_profile.user_id')
->where('farm.id',$request->segment(3))
->first()),

];
return Inertia::render('Verifier/Farm',$data);
}



public function updateVerificationStatus(Request $request){
$model=FarmModel::where('id',$request->farm_id)->where('verifier_id',Auth::id())->first();
if($model->status=='pending'){
$model->status='verified';
$model->save();
}
return redirect()->back();
}

















}
