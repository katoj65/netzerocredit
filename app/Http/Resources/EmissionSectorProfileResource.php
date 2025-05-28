<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\EmissionActivityModel;

class EmissionSectorProfileResource extends JsonResource
{
/**
 * Transform the resource into an array.
 *
 * @return array<string, mixed>
 */
public function toArray(Request $request): array
{
return [
'id'=>$this->id,
'name'=>$this->name,
'activities'=>EmissionActivityModel::select('id','activity')->where('emission_sector_id',$this->id)->limit(4)
->get(),

];
}
}
