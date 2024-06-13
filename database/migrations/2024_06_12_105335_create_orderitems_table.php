<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderitemsTable extends Migration
{
    public function up()
    {
        Schema::create('orderitems', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->onDelete('cascade');
            $table->string('item');
            $table->integer('jumlah');
            $table->string('atas_nama');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orderitems');
    }
}
