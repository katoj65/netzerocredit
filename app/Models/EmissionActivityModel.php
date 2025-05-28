<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmissionActivityModel extends Model
{
    //
    protected $table = 'emission_activity';
    protected $fillable = [
        'emission_id',
        'activity',
    ];
}
