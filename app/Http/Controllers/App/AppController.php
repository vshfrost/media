<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;

class AppController extends Controller
{
    public function index()
    {
        // return view('app.index');
        return view('welcome');
    }
}
