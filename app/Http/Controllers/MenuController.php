<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Home',[
            'menu' => Menu::All()
        ]);
    }

    public function indexAdmin()
    {
        return Inertia::render('Admin', [
            'menu' => Menu::All()
        ]
    );
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
         
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'nama' => 'required',
        'harga' => 'required|integer',
        'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $gambar = $request->file('gambar');
    $nama_gambar = time() . "_" . $gambar->getClientOriginalName();

    $gambar->storeAs('public/images', $nama_gambar);

    $menu = new Menu();
    $menu->nama = $request->nama;
    $menu->harga = $request->harga;
    $menu->gambar = $nama_gambar;
    $menu->save();

    return redirect()->route('admin')->with('success', 'Menu berhasil ditambahkan');
}
    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        //
    }
}
