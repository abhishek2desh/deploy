@extends('layouts.app')

@section('title', 'Embed Code')

@section('sidebar')
    @parent

@stop

@section('content')
 <style type="text/css">
 #main{border: 5px solid darkgrey;
 -webkit-border-radius: 12px;
              -moz-border-radius: 12px;
              border-radius: 12px;
              -moz-box-shadow: 1px 1px 3px #000;
              -webkit-box-shadow: 1px 1px 3px #000;
              box-shadow: 2px 2px 4px #000;
 }

 #second{
 	
margin-top:2%;
 	border: 1px solid darkgrey;
 -webkit-border-radius: 12px;
              -moz-border-radius: 12px;
              border-radius: 12px;
              -moz-box-shadow: 1px 1px 3px #000;
              -webkit-box-shadow: 1px 1px 3px #000;
              box-shadow: 2px 2px 4px #000;
 }
 </style>
<div class="container-fluid">
   	<div class="row">
   <center> <strong><h3>Add the following code in the head portion of your website </h3></strong></center><br/>
      <div class="container">

        <div id='main' class="col-md-5 col-md-offset-1" style="width:auto;text-anchor:middle; border:solid 1px #D3D3D6;background-color:#D3D3D3; text-align: justify">


<h4><?php echo htmlentities("<script src='http://localhost:8013/laranew/public/assets/tags/commonFunc.js' async='true' type='text/javascript'></script>"); ?><br/><br/>  
	<?php echo htmlentities("<script src='http://localhost:8013/laranew/public/assets/tags/". Auth::user()->name.".js' async='true' type='text/javascript'></script>"); ?></br>
</h4>
        </div>
<div class'container'><div id='second' class="col-md-4 col-md-offset-5" style="width:auto;text-anchor:middle; border:solid 1px #red;opacity:0.8;background-color:red;color:#fff; text-align: justify">
<CENTER><a style="color:#fff;" href='dashboard'><h3> <--Go back to design</h3></a></CENTER>


        </div>
</div>

        
      </div>
    </div>
</div>

@stop
