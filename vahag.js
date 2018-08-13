$('.xujan1').click(function(){
// alert('rwewewewewewewewewewewe')
// alert('vahag')

$("html, body").animate({
   scrollTop:'0px'},1000);

});


$('.xujan2').click(function(){

// alert('vahag')

$("html, body").animate({
   scrollTop:'804px'},1000);

});
$('.xujan3').click(function(){

// alert('vahag')

$("html, body").animate({
   scrollTop:'2116px'},1000);

});
$('.xujan4').click(function(){

// alert('vahag')

$("html, body").animate({
   scrollTop:'2843px'},1500);

});

  $(document).ready(function() {
  
	$("html").niceScroll({cursorwidth:"8px", cursorfixedheight:"120",cursorcolor:"rgb(66, 38, 24)"});  // The document page (body)
	
	// $("#div1").html($("#div1").html()+' '+nice.version);
    
    // $("#boxscroll").niceScroll({cursorborder:"",cursorcolor:"#00F",boxzoom:true}); // First scrollable DIV

    // $("#boxscroll2").niceScroll("#contentscroll2",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // Second scrollable DIV
    // $("#boxframe").niceScroll("#boxscroll3",{cursorcolor:"#0F0",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // This is an IFrame (iPad compatible)
	
    // $("#boxscroll4").niceScroll("#boxscroll4 .wrapper",{boxzoom:true});  // hw acceleration enabled when using wrapper
    
  });


  $('.ter').click(function(){

    $('.hamar').css({"opacity":"1"})
$('.hamar1').css({"opacity":"0"})
$('.hamar2').css({"opacity":"0"})

  })

    $('.ter1').click(function(){

    $('.hamar1').css({"opacity":"1"})
$('.hamar').css({"opacity":"0"})
$('.hamar2').css({"opacity":"0"})

  })

        $('.ter2').click(function(){

    $('.hamar1').css({"opacity":"0"})
$('.hamar').css({"opacity":"0"})
$('.hamar2').css({"opacity":"1"})


  })

