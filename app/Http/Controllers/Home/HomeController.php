<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login()
    {
        //
    $data['title']='Login';
    $data['data']=[];
    return Inertia::render('Login',$data);
    }


    public function register(){
    $data['title']='Register';
    $data['data']=[];
    return Inertia::render('Register',$data);
    }



public function updateUserGenderRole(Request $request){
$validate=$request->validate([
'gender'=>'required',
'role'=>'required'
],['required'=>'*Field is required.*']);
$model=new User;
$update=$model->find(Auth::user()->id);
$update->role=$request->role;
$update->gender=$request->gender;
$update->save();
return redirect()->route('dashboard');





}














}
