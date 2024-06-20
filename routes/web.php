<?php

use App\Http\Controllers\AuthManager;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Menu;

Route::get('/', [AuthenticatedSessionController::class, 'index'])->name('home');
Route::post('/', [OrderController::class, 'store'])->name('order.store');

// Order Route - Requires Authentication
Route::middleware('auth')->group(function () {
    Route::get('/admin', [MenuController::class, 'indexAdmin'])->name('admin');
    Route::post('/admin', [MenuController::class, 'store']);
    Route::delete('/admin', [MenuController::class, 'destroy'])->name('admin.destroy');
    Route::get('order', [OrderController::class, 'index'])->name('order');
    Route::get('manager',[OrderController::class, 'indexManager'])->name('manager');
});

require __DIR__.'/auth.php';
