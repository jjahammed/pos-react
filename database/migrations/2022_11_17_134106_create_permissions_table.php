<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            // $table->unsignedBigInteger('submodule_id');
            $table->string('uniId');
            $table->longText('route');
            $table->longText('value');
            // $table->string('slug');
            // $table->foreign('submodule_id')
            //       ->references('id')
            //       ->on('submodules')
            //       ->onUpdate('cascade')
            //       ->onDelete('cascade');
            $table->string('operate_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permissions');
    }
};
