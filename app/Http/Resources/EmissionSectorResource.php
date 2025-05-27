<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmissionSectorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
    $replace=str_replace(' ','-',$this->name);
        return [
        'name'=>$this->name,
        'route'=>$replace
        ];
    }
}
