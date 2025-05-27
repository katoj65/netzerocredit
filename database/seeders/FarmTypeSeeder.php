<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FarmTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

$data=['crop', 'livestock','mixed','agroforestry'];
foreach($data as $row){
DB::table('farm_type')->insert(['name'=>$row]);
}
    }
}
