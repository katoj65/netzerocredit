<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SustainablePracticeModel extends Model
{
    //
    protected $table='sustainable_practice';
    protected $fillable=['name','description'];
}
