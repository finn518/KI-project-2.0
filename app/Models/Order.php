<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

     protected $table = 'orders';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'atas_nama', 'total'];

    public function orderItems()
    {
        return $this->hasMany(Orderitems::class, 'atas_nama', 'atas_nama');
    }
}
