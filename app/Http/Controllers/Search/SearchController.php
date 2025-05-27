<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    //

public function search(Request $request){
$data['title']='search';
$data['response']=[];
return Inertia::render('Search/Search',$data);
}









}
