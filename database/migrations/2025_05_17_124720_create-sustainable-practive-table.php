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
        Schema::create('sustainable_practice', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('emission_sector_id')->after('id');
            $table->foreign('emission_sector_id')->references('id')->on('emission_sector');
            $table->string('name');
            $table->mediumText('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sustainable_practice');
    }
};
