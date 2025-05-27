<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RoleModel;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\FarmModel;
use App\Http\Resources\FarmListResource;

class DashboardController extends Controller
{
    //

public function dashboard(){
$class=new DashboardController;
DashboardController::verifyDashboard();
$role=Auth::user()->role;
switch($role){
case $role=='user':
$dashboard=$class->userDashboard();
break;
case $role=='admin';
$dashboard='';
break;
case $role=='business';
$dashboard='';
break;
case $role=='organisation';
$dashboard='';
break;
case $role=='government';
$dashboard='';
break;
case $role=='individual';
$dashboard='';
break;
case $role=='verifier';
$dashboard=$class->verifierDashboard();
break;
default: $role=='verify';
$dashboard=$class->verifyDashboard();
break;
}

return $dashboard;
}







/** Verify profile */
public function verifyDashboard(){
$data['title']='verify';
$data['response']=[
'roles'=>RoleModel::select('name')->where('name','!=','admin')->where('name','!=','verifier')->get(),
];
return Inertia::render('Dashboard',$data);
}




/** User dashboard */
public function userDashboard(){
$data['title']='user';
$data['response']=[];
return ('some information');
}




/** Verifier dashboard */
public function verifierDashboard(){
$data['title']='user';
$data['response']=[
'farm'=>new FarmListResource(FarmModel::select('*')
->join('users','farm.user_id','=','users.id')
->join('user_profile','users.id','=','user_profile.user_id')
->orderBy('farm.created_at','DESC')
->limit(10)
->get()),


];
return Inertia::render('Dashboard',$data);
}











}
