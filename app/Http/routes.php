<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');



Route::get('/',function () {
    return view('welcome');
});
Route::get('rating', function () {
    return view('rating');
});

Route::get('json',function(){
    return view('json');
});

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

 Route::get('home', 'HomeController@code');
    
    route::get('dashboard','HomeController@test');
    Route::get('contact','HomeController@contact');
    Route::get('share','HomeController@share');
    Route::get('preview','HomeController@preview');

    Route::get('/preview2','HomeController@preview2');
    Route::get('/write', 'HomeController@write');
    Route::post('testjson','AjaxController@ajaxResponse');

    Route::post('createjs','AjaxController@jsCreator');

    Route::get('Embedcode',function(){
    return view('embedcode');
    });
    