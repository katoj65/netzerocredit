<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FarmModel extends Model
{
    //
protected $table='farm';
protected $fillable=[
'user_id',
'farm_name',
'farm_size',
'farm_type',
'farm_items',
'land_ownership',
'sustainable_practice',
'num_trees',
'num_animals',
'soil_quality',
'water_source',
'climate_challenge',
'geo_location',
'status',
'verifier_id'
];




}
