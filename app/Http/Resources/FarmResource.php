<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FarmResource extends JsonResource
{
/**
 * Transform the resource into an array.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
//convert to array
$practices=explode(",", $this->sustainable_practice);
$challenge=explode(',',$this->climate_challenge);

return [
//farmer infomation
'user_id'=>$this->id,
'firstname'=>$this->firstname,
'lastname'=>$this->lastname,
'gender'=>$this->gender,
'dob'=>$this->dob,
'district'=>$this->district,
'parish'=>$this->parish,
'village'=>$this->village,
'email'=>$this->email,
'tel'=>$this->tel,
'role'=>$this->role,
//farm
'farm_id'=>$this->farm_id,
'farm_name'=>$this->farm_name,
'farm_size'=>$this->farm_size,
'farm_type'=>$this->farm_type,
'farm_items'=>$this->farm_items,
'land_ownership'=>$this->land_ownership,
'sustainable_practice'=>$practices,
'count_trees'=>$this->num_trees,
'count_animals'=>$this->num_animals,
'soil_quality'=>$this->soil_quality,
'water_source'=>$this->water_source,
'climate_challenge'=>$challenge,
'location'=>$this->geo_location,
'status'=>$this->status



];
}
}
