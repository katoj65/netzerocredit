<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WaterSourceModel extends Model
{
    //
    protected $table='water_source';
    protected $fillable=['name','description'];
}
