<?php

namespace App\Http\Controllers\Notification;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    //

public function notification(){
$data['title']='Notification';
$data['response']=[];
return Inertia::render('Notification',$data);

}






}
