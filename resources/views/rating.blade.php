
@extends('layouts.app')
<link rel="stylesheet" href="{{URL::asset('assets/css/star-rating.css')}}" media="all" type="text/css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="{{URL::asset('assets/js/star-rating.js')}}" type="text/javascript"></script>
@section('content')
    
    <div class="container">
<div class="page-header">
<h2>Bootstrap Star Rating Examples <small>&copy; Kartik Visweswaran, Krajee.com</small></h2>
</div>

<form>
    <input id="input-21b" value="0" type="number" class="rating" min=0 max=10 step=1 data-size="lg" data-stars="10">
    <hr>
    <input id="input-21c" value="0" type="number" class="rating" min=0 max=8 step=1 data-size="xl" data-stars="8">
    <hr>
    <input id="input-21d" value="2" type="number" class="rating" min=0 max=5 step=1 data-size="sm">
    <hr>
    <input id="input-21e" value="0" type="number" class="rating" min=0 max=5 step=1 data-size="xs" >
    <hr>
    <input id="input-21f" value="0" type="number" min=0 max=5 step=0.1 data-size="md" >
    <hr>
    <input id="input-2ba" type="number" class="rating" min="0" max="5" step="0.5" data-stars=5
    data-symbol="&#xe005;" data-default-caption="{rating} hearts" data-star-captions="{}">
    <hr>
    <input id="input-22"  value="0" type="number" class="rating" min=0 max=5 step=0.5 data-rtl=1 data-container-class='text-right' data-glyphicon=0>
    <div class="clearfix"></div>
    <hr>     
    <input class="rb-rating">
    <hr>
    <input id="rating-input" type="number" />
    <button id="btn-rating-input" type="button" class="btn btn-primary">Toggle Disable</button>
    <hr>  
    <input id="kartik" class="rating" data-stars="5" data-step="0.1"/>
    <div class="form-group" style="margin-top:10px">
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="reset" class="btn btn-default">Reset</button>
    <button type="button" class="btn btn-danger">Destroy</button>
    <button type="button" class="btn btn-success">Create</button>
    </div>
</form>
<hr>
<script>
    jQuery(document).ready(function () {
        $("#input-21f").rating({
            starCaptions: function(val) {
                if (val < 3) {
                    return val;
                } else {
                    return 'high';
                }
            },
            starCaptionClasses: function(val) {
                if (val < 3) {
                    return 'label label-danger';
                } else {
                    return 'label label-success';
                }
            },
            hoverOnClear: false
        });
        
        $('#rating-input').rating({
              min: 0,
              max: 5,
              step: 1,
              size: 'lg',
              showClear: false
           });
           
        $('#btn-rating-input').on('click', function() {
            $('#rating-input').rating('refresh', {
                showClear:true, 
                disabled: !$('#rating-input').attr('disabled')
            });
        });
        
        
        $('.btn-danger').on('click', function() {
            $("#kartik").rating('destroy');
        });
        
        $('.btn-success').on('click', function() {
            $("#kartik").rating('create');
        });
        
        $('#rating-input').on('rating.change', function() {
            alert($('#rating-input').val());
        });
        
        
        $('.rb-rating').rating({'showCaption':true, 'stars':'3', 'min':'0', 'max':'3', 'step':'1', 'size':'xs', 'starCaptions': {0:'status:nix', 1:'status:wackelt', 2:'status:geht', 3:'status:laeuft'}});
    });
</script>
</div>  

@endsection