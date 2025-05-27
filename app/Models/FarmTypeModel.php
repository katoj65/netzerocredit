<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FarmTypeModel extends Model
{
    //
    protected $table='farm_type';
    protected $fillable=['name','description'];
}
