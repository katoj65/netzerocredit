<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WaterSourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
    $data=['rain','irrigation','piped','dam','underground','rivers and streams','wetlands and marshlands','springs'];
    foreach($data as $d){
DB::table('water_source')->insert(['name'=>$d,'description'=>'']);
    }
    }
}
