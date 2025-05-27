<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfileModel extends Model
{
    //
protected $table='user_profile';
protected $fillable=['user_id','gender','dob','district','parish','village','avator','email'];

}
