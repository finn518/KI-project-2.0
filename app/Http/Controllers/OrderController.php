<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Orderitems;
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
            'orders' => $orders
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
            'items.*.jumlah' => 'required|integer|min:1',
        ]);

        $order = Order::create([
            'atas_nama' => $request->atas_nama,
        ]);

        foreach ($request->items as $item) {
            Orderitems  ::create([
                'order_id' => $order->id,
                'item' => $item['item'],
                'jumlah' => $item['jumlah'],
                'atas_nama' => $request->atas_nama,
            ]);
        }

        return redirect()->back()->with('success', 'Order has been placed successfully');
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
