<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FarmLandOwnershipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
$data=['Owned','Leased','Communal','Customary'];
foreach($data as $d){
DB::table('farm_land_ownership')->insert(['name'=>$d]);
}



    }
}
