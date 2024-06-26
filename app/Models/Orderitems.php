<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderitems extends Model
{
    use HasFactory;
    protected $table = 'orderitems';
    protected $fillable = ['order_id', 'item', 'jumlah', 'atas_nama'];

    public function order()
    {
        return $this->belongsTo(Order::class,'atas_nama', 'atas_nama');
    }
    public function menu()
    {
        return $this->belongsTo(Menu::class, 'item', 'nama');
    }
}

