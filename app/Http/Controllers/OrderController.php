<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Orderitems;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with('orderItems')->get();

        // Mengirim data ke komponen Vue 'Pesanan'
        return Inertia::render('Pesanan', [
            'orders' => $orders,
            'menu' => Menu::all() 
        ]);
    }

    public function indexManager()
    {
        $orders = Order::with('orderItems')->get();

        // Mengirim data ke komponen Vue 'Pesanan'
        return Inertia::render('Manager', [
            'orders' => $orders,
            'menu' => Menu::all() 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        $request->validate([
            'atas_nama' => 'required|string|max:255',
            'items' => 'required|array',
            'items.*.item' => 'required|string|max:255',
            'items.*.jumlah' => 'integer|min:0',
        ]);

        $order = Order::create([
            'atas_nama' => $request->atas_nama,
            'total' => 0,
        ]);

        $total = 0;

        foreach ($request->items as $item) {
            if ($item['jumlah'] > 0) {
                $menuItem = Menu::where('nama', $item['item'])->first();
                if ($menuItem) {
                    $itemTotal = $menuItem->harga * $item['jumlah'];
                    $total += $itemTotal;

                    Orderitems::create([
                        'order_id' => $order->id,
                        'item' => $item['item'],
                        'jumlah' => $item['jumlah'],
                        'atas_nama' => $request->atas_nama,
                    ]);
                }
            }
        }

        $order->update(['total' => $total]);
        return redirect()->back()->with('success', 'Pesanan anda masuk ke dalam antrian');
    }



    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
