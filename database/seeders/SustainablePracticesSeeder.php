<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SustainablePracticesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

$data=['agroforestry','composting','no burn','mulching','organic fertilizers','organic farming','rain water havesting','biochar','waste recycling','crop cover','rotational grazing','reforestation',
'reduced synthetic fertilizer','watershed management'];

foreach($data as $d){
DB::table('sustainable_practice')->insert(['name'=>$d]);
}


    }
}
