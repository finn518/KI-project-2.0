<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Menu;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the Home or Admin view based on authentication status.
     */
    public function index()
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->role === 'manager') {
                return redirect()->route('manager');
            } elseif ($user->role === 'admin') {
                return redirect()->route('admin');
            }
        }

        return Inertia::render('Home', [
            'menu' => Menu::all(),
            'auth' => auth()->user(),
            'flash' => session('flash'),
        ]);
    }

    // function Manager(){
    //     if(Auth::check()){
    //         $user = auth::user();
    //         if )
    //         return inertia::render('Login');
    //     } return inertia::render('admin');}

    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $user = Auth::user();
        if ($user->role === 'manager') {
            return redirect()->intended(route('manager'));
        } elseif ($user->role === 'admin') {
            return redirect()->intended(route('admin'));
        }

        return redirect()->intended(route('home'));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
