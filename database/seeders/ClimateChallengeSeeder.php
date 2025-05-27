<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClimateChallengeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
    $data=['drought','floods','pests','soil erosion','strong winds','deforestation','biodiversity loss'];
    foreach($data as $d){
DB::table('climate_challenge')->insert(['name'=>$d]);
    }
    }
}
