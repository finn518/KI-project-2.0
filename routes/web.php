<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

// Guest Routes
Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])->name('password.request');
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');
    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');
    Route::post('reset-password', [NewPasswordController::class, 'store'])->name('password.store');
});

// Authenticated Routes
Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)->name('verification.notice');
    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)->middleware(['signed', 'throttle:6,1'])->name('verification.verify');
    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])->middleware('throttle:6,1')->name('verification.send');
    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])->name('password.confirm');
    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

// Public Route
Route::get('/', [AuthenticatedSessionController::class, 'index'])->name('home');
Route::post('/', [OrderController::class, 'store'])->name('order.store');

// Admin Routes
Route::middleware('auth')->group(function () {
    Route::get('/admin', function () {
        if (auth()->user()->role !== 'admin') {
            return redirect('/');
        }
        return app(MenuController::class)->indexAdmin();
    })->name('admin');

    Route::post('/admin', function (Request $request) {
        if (auth()->user()->role !== 'admin') {
            return redirect('/');
        }
        return app(MenuController::class)->store($request);
    })->name('admin.store');

    Route::delete('/admin/{id}', function ($id) {
        if (auth()->user()->role !== 'admin') {
            return redirect('/');
        }
        return app(MenuController::class)->destroy($id);
    })->name('admin.destroy');

    Route::get('order', function () {
        if (auth()->user()->role !== 'admin') {
            return redirect('/');
        }
        return app(OrderController::class)->index();
    })->name('order');
});

// Manager Routes
Route::middleware('auth')->group(function () {
    Route::get('register', function () {
        if (auth()->user()->role !== 'manager') {
            return redirect('/');
        }
        return app(RegisteredUserController::class)->create();
    })->name('register');

    Route::post('register', function (Request $request) {
        if (auth()->user()->role !== 'manager') {
            return redirect('/');
        }
        return app(RegisteredUserController::class)->store($request);
    });

    Route::get('manager', function () {
        if (auth()->user()->role !== 'manager') {
            return redirect('/');
        }
        return app(OrderController::class)->indexManager();
    })->name('manager')->middleware(['manager']);
});

require __DIR__.'/auth.php';