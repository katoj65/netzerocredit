<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class SoilConditionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
    $data=['good','moderate','degraded'];
    foreach($data as $d){
DB::table('soil_condition')->insert(['name'=>$d]);
    }
    }
}
