<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SoilConditionModel extends Model
{
    //
    protected $table='soil_condition';
    protected $fillable=['name','description'];

}
