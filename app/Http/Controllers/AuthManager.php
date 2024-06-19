<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Auth\AuthManager as AuthAuthManager;
use Inertia\Inertia;

class AuthManager extends Controller
{
    function login(){
        return inertia::render('Login');
    }   

    function Admin(){
        if(!Auth::check()){
            return inertia::render('Login');
        } return inertia::render('admin');}

    function loginPost(Request $request){
        $request->validate([
            'email'=>'required',
            'password'=>'required',
        ]);
    }
    }

