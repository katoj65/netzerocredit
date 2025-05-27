<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmissionSectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
$data=['agriculture','land use','energy',
'industrialisation','waste'];
foreach($data as $d){
DB::table('emission_sector')->insert(['name'=>$d]);
}
}
}
