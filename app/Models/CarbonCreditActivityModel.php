<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarbonCreditActivityModel extends Model
{
    //
    protected $table = 'carbon_credit_activity';
    protected $fillable = [
        'emission_sector_id',
        'name',
        'description',
    ];
    protected $casts = [
        'emission_sector_id' => 'integer',
    ];
    public function emissionSector()
    {
        return $this->belongsTo(EmissionSectorModel::class, 'emission_sector_id');
    }
}
