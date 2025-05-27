<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('farm', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('farm_name');
            $table->integer('farm_size');
            $table->string('farm_type');
            $table->string('farm_items');
            $table->string('land_ownership');
            $table->string('sustainable_practice');
            $table->integer('num_trees');
            $table->integer('num_animals');
            $table->string('soil_quality');
            $table->string('water_source');
            $table->string('climate_challenge');
            $table->string('geo_location');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('farm');
    }
};
