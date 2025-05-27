<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FarmLandOwnershipModel extends Model
{
    //
protected $table='farm_land_ownership';
protected $fillable=['name','description'];
}
