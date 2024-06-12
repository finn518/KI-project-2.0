<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderitems extends Model
{
    use HasFactory;
    protected $table = 'orderitems';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'order_id', 'item', 'jumlah', 'atas_nama'];

    public function order()
    {
        return $this->belongsTo(Order::class,'atas_nama', 'atas_nama');
    }
}

