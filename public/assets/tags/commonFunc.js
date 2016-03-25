var Base64 = {


    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",


    encode: function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },


    decode: function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    _utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}



function setRatings(value)
{
 
value= parseInt(value);

//  alert(value);
$tvc.ratingTypeInt=value;
  if (value==null)
  {}
else if(value==1)
  {$('#rating').remove();
   $tvc.ratingType='<form id="rating" class="container-fluid"><div id="rec_bar1"><span style="margin-left:3%;">0</span><span style="margin-left:6%;">1</span><span style="margin-left:7%;">2</span><span style="margin-left:6%;">3</span><span style="margin-left:6%;">4</span><span style="margin-left:6%;">5</span><span style="margin-left:6%;">6</span><span style="margin-left:6%;">7</span><span style="margin-left:6%;">8</span><span style="margin-left:6%;">9</span><span style="margin-left:6%;">10</span></div><input id="tvc_rating" value="0" type="number" class="rating" min=0 max=11 step=1 data-size="md" data-stars="11"><div id="rec_bar"> <span>Not likely</span><span id="likely" style="margin-left:80%;">Very Likely</span> </div><br/><center><button type="button" style="width:150px" class="btn btn-info score">Submit</button></center></form>';
 
$('#boxb').append($tvc.ratingType);
  $("#tvc_rating").rating();
   }
else if(value==2)
  {$('#rating').remove();
   $tvc.ratingType='<form id="rating" class="container-fluid"><div id="rec_bar1"><span style="margin-left:3%;">0</span><span style="margin-left:6%;">1</span><span style="margin-left:7%;">2</span><span style="margin-left:6%;">3</span><span style="margin-left:6%;">4</span><span style="margin-left:6%;">5</span><span style="margin-left:6%;">6</span><span style="margin-left:6%;">7</span><span style="margin-left:6%;">8</span><span style="margin-left:6%;">9</span><span style="margin-left:6%;">10</span></div><input id="tvc_rating" type="number" class="kv-ltr-theme-svg-alt rating-loading" value="0" dir="ltr" data-size="md" min=0 max=11 step=1 data-stars="11"><div id="rec_bar"> <span>Not likely</span><span id="likely" style="margin-left:80%;">Very Likely</span> </div><br/><center><button type="button" style="width:150px" class="btn btn-info score">Submit</button></center></form>';

    $('#boxb').append($tvc.ratingType);
    $('#tvc_rating').rating({
        hoverOnClear: false,
        theme: 'krajee-svg',
        containerClass: 'is-heart',
        filledStar: '<span class="krajee-icon krajee-icon-heart"></span>',
        emptyStar: '<span class="krajee-icon krajee-icon-heart"></span>',
        defaultCaption: '{rating} hearts',
        starCaptions: function (rating) {
            return rating == 1 ? 'One heart' : rating + ' hearts';
        }
    });
  }
if ($tvc.ratingSize!=null){setRatingSize($tvc.ratingSize);}else{setRatingSize('md');}
  $('#tvc_rating').on('rating.change', function(event, value, caption) {
    console.log(value-1);
    console.log(caption);
});
   
}


function setRatingSize(value)
{
   var key="ratingSize";
    $tvc.ratingSize=value;

   if(parseInt($tvc.ratingTypeInt)==1)
   {
      if (value==null)
      {}
    else if(value=="xl")
      {
     
      $('#rec_bar1 >span').css('margin-left','66px');
      $('#rec_bar1 >span:first').css('margin-left','30px');
       $('#tvc_rating').rating('create', {min:0, max:11, step:1,stars:11, size:'xl'});
       document.getElementById('boxb').style.width =890+'px';
       document.getElementById('boxb').style.height =390+'px';
        document.getElementById('likely').style.marginLeft =83+'%';
        
      }
    else if(value=="lg")
      {$('#rec_bar1 >span').css('margin-left','53px');
     $('#rec_bar1 >span:first').css('margin-left','20px');
       $('#tvc_rating').rating('create', {min:0, max:11, step:1,stars:11, size:'lg'});
       document.getElementById('boxb').style.width =750+'px';
        document.getElementById('boxb').style.height =380+'px';
        document.getElementById('likely').style.marginLeft =80+'%';
        
      }
      else if(value=="md")
      {$('#rec_bar1 >span').css('margin-left','42px');
     $('#rec_bar1 >span:first').css('margin-left','17px');
        $('#tvc_rating').rating('create', {min:0, max:11, step:1,stars:11, size:'md'});
        document.getElementById('boxb').style.width =630+'px';
         document.getElementById('boxb').style.height =370+'px';
        document.getElementById('likely').style.marginLeft =75+'%';
      
      }
      else if(value=="sm")
      {$('#rec_bar1 >span').css('margin-left','33px');
     $('#rec_bar1 >span:first').css('margin-left','13px');
       $('#tvc_rating').rating('create', {min:0, max:11, step:1,stars:11, size:'sm'});
       document.getElementById('boxb').style.width =550+'px';
         document.getElementById('boxb').style.height =350+'px';
        document.getElementById('likely').style.marginLeft =70+'%';
        
      }
       else if(value=="xs")
      {$('#rec_bar1 >span').css('margin-left','26px');
     $('#rec_bar1 >span:first').css('margin-left','10px');
       $('#tvc_rating').rating('create', {min:0, max:11, step:1,stars:11, size:'xs'});
       document.getElementById('boxb').style.width =450+'px';
         document.getElementById('boxb').style.height =330+'px';
        document.getElementById('likely').style.marginLeft =65+'%';
        
      }

    }
  else if(parseInt($tvc.ratingTypeInt)==2)
  {
     if (value==null)
      {}
    else if(value=="xl")
      {
     
      $('#rec_bar1 >span').css('margin-left','66px');
      $('#rec_bar1 >span:first').css('margin-left','32px');
       $('#tvc_rating').rating('create',{
        hoverOnClear: false,
        theme: 'krajee-svg',
        containerClass: 'is-heart',
        filledStar: '<span class="krajee-icon krajee-icon-heart"></span>',
        emptyStar: '<span class="krajee-icon krajee-icon-heart"></span>',
        defaultCaption: '{rating} hearts',
        size:'xl',
        stars:11,
        starCaptions: function (rating) {
            return rating == 1 ? 'One heart' : rating + ' hearts';
        }
        });
       document.getElementById('boxb').style.width =900+'px';
       document.getElementById('boxb').style.height =390+'px';
        document.getElementById('likely').style.marginLeft =83+'%';
        
      }
    else if(value=="lg")
      {
        $('#rec_bar1 >span').css('margin-left','53px');
        $('#rec_bar1 >span:first').css('margin-left','22px');
        $('#tvc_rating').rating('create',{
            hoverOnClear: false,
            theme: 'krajee-svg',
            containerClass: 'is-heart',
            filledStar: '<span class="krajee-icon krajee-icon-heart"></span>',
            emptyStar: '<span class="krajee-icon krajee-icon-heart"></span>',
            defaultCaption: '{rating} hearts',
            size:'lg',
            stars:11,
            starCaptions: function (rating) {
                return rating == 1 ? 'One heart' : rating + ' hearts';
            }
        });
       document.getElementById('boxb').style.width =750+'px';
        document.getElementById('boxb').style.height =370+'px';
        document.getElementById('likely').style.marginLeft =80+'%';
        
      }
      else if(value=="md")
      {
        $('#rec_bar1 >span').css('margin-left','39px');
        $('#rec_bar1 >span:first').css('margin-left','17px');
        $('#tvc_rating').rating('create',{
            hoverOnClear: false,
            theme: 'krajee-svg',
            containerClass: 'is-heart',
            filledStar: '<span class="krajee-icon krajee-icon-heart"></span>',
            emptyStar: '<span class="krajee-icon krajee-icon-heart"></span>',
            defaultCaption: '{rating} hearts',
            size:'md',
            stars:11,
            starCaptions: function (rating) {
                return rating == 1 ? 'One heart' : rating + ' hearts';
            }
        });
        document.getElementById('boxb').style.width =590+'px';
        document.getElementById('boxb').style.height =360+'px';
        document.getElementById('likely').style.marginLeft =75+'%';
      
      }
      else if(value=="sm")
      {
        $('#rec_bar1 >span').css('margin-left','32px');
        $('#rec_bar1 >span:first').css('margin-left','14px');
        $('#tvc_rating').rating('create',{
            hoverOnClear: false,
            theme: 'krajee-svg',
            containerClass: 'is-heart',
            filledStar: '<span class="krajee-icon krajee-icon-heart"></span>',
            emptyStar: '<span class="krajee-icon krajee-icon-heart"></span>',
            defaultCaption: '{rating} hearts',
            size:'sm',
            stars:11,
            starCaptions: function (rating) {
                return rating == 1 ? 'One heart' : rating + ' hearts';
            }
        });
        document.getElementById('boxb').style.width =550+'px';
        document.getElementById('boxb').style.height =350+'px';
        document.getElementById('likely').style.marginLeft =70+'%';
        
      }
       else if(value=="xs")
      {
        $('#rec_bar1 >span').css('margin-left','23px');
        $('#rec_bar1 >span:first').css('margin-left','12px');
                $('#tvc_rating').rating('create',{
            hoverOnClear: false,
            theme: 'krajee-svg',
            containerClass: 'is-heart',
            filledStar: '<span class="krajee-icon krajee-icon-heart"></span>',
            emptyStar: '<span class="krajee-icon krajee-icon-heart"></span>',
            defaultCaption: '{rating} hearts',
            size:'xs',
            stars:11,
            starCaptions: function (rating) {
                return rating == 1 ? 'One heart' : rating + ' hearts';
            }
        });
        document.getElementById('boxb').style.width =450+'px';
        document.getElementById('boxb').style.height =340+'px';
        document.getElementById('likely').style.marginLeft =65+'%';
        
      }

  }

}



