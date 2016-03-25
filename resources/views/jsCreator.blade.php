<?php

$bytes_written = File::put('assets/tags/'.$_POST['file'].".js",'var $tvc={id:"'.$_POST['file'].'"};'."\r\n".'$tvc.draft="'.$_POST['draft'].'";'."\r\n".'$tvc.ratingType="'.$_POST['ratingType'].'";'."\r\n".'$tvc.ratingTypeInt="'.$_POST['ratingTypeInt'].'";'."\r\n".'$tvc.head="'.$_POST['head'].'";'."\r\n".'$tvc.ratingValue="null";'."\r\n".'$tvc.ratingSize="'.$_POST['ratingSize'].'";'."\r\n");
if ($bytes_written === false)
{
    die("Error writing to file");
}
echo "ok1";

$bytes_written = File::append('assets/tags/'.$_POST['file'].".js",'(function() {
  var nTimer = setInterval(function() {
    if (window.jQuery) {
      // Do something with jQuery
        start();
      clearInterval(nTimer);
    }
  }, 500);
})();'."\r\n"
.'function start()
{$(document).ready(
    function(){if (typeof dataLayer == "undefined") {
    window.dataLayer = window.dataLayer || [];
    }
      dataLayer.push({
        "event" : "tvc_npsloaded"
      });

        var key=new Array("draft","pophight","popwidth","jsbkclr","jsfrclr"); 
        $tvc.bodycolor=$("body").css("background");$("body").css("background","black");
        if($tvc.draft==null){}else{ $("head").append(Base64.decode($tvc.head));'."\r\n"
        .'$("body").append("<div id=openModal class=modalDialog >" + Base64.decode($tvc.draft) + "</div>");'."\r\n"
        .'$(document).ready(function(){setTimeout(function(){$(" .modalDialog ").css("opacity",1);'."\r\n"
            .'$(" .modalDialog ").css("pointer-events","auto");
            $(" .modalDialog ").show();},3000);});}'."\r\n"
.'$(".close").click(function(){'."\r\n".' dataLayer.push({
        "event" : "tvc_nps_close"
      });$(" .modalDialog ").css("opacity",0);'."\r\n"
    .'$(" .modalDialog ").css("display","none");
    $("body").css("background",$tvc.bodycolor);$("body").css("opacity",1);});$(".tvc_promoter").click(function(){'."\r\n".
    '$("#boxb").hide();$("#page4").show();});'."\r\n"
.'$(".tvc_passive").click(function(){$("#boxb").hide();'."\r\n"
    .'$("#page3").show();});'."\r\n"
.'$(".tvc_detractors").click(function(){$("#boxb").hide();$("#page2").show();});'."\r\n"
.'if($tvc.ratingTypeInt!=null)'."\r\n"
.'{setRatings($tvc.ratingTypeInt);'."\r\n"
.'console.log("ratingTypeInt:"+$tvc.ratingTypeInt);}'."\r\n"
.'if ($tvc.ratingSize!=null)'."\r\n"
.'{ setRatingSize($tvc.ratingSize);}});  $(document).ready(function(){


   $("#tvc_rating").on("rating.change", function(event, value, caption) {
       $tvc.ratingValue=value-1;
       console.log($tvc.ratingValue);
    });

  $(".score").on("click", function() {
    if($tvc.ratingValue<7)
    {
            $("#boxb").hide();
            $("#page2").show();
                   
    }

    else if($tvc.ratingValue>6 && $tvc.ratingValue<9)
    {
             $("#boxb").hide();
             $("#page3").show();

    }
     else if($tvc.ratingValue>8)
    {
             $("#boxb").hide();
             $("#page4").show();

    }
     dataLayer.push({
        "event" : "tvc_nps_SubmitClicked",
        "tvc_score": $tvc.ratingValue
      });
    

        });

 
$(".feedback1").on("click", function() {
   $tvc.feedback1=$("textarea").eq(0).val();
     dataLayer.push({
        "event" : "tvc_nps_FeddbackSubmit",
        "tvc_feedback": $tvc.feedback1
      });
    $(" .modalDialog ").css("opacity",0);'."\r\n"
    .'$(" .modalDialog ").css("display","none");
 $("body").css("background",$tvc.bodycolor);$("body").css("opacity",1);
        });

$(".feedback2").on("click", function() {
   $tvc.feedback1=$("textarea").eq(1).val();
     dataLayer.push({
        "event" : "tvc_nps_FeddbackSubmit",
        "tvc_feedback": $tvc.feedback1
      });
    $(" .modalDialog ").css("opacity",0);'."\r\n"
    .'$(" .modalDialog ").css("display","none");
 $("body").css("background",$tvc.bodycolor);$("body").css("opacity",1);
        });

});}
');
if ($bytes_written === false)
{
    die("Error writing to file");
}
echo "ok2";
?>
