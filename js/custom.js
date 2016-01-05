$(document).ready(function(){
	console.log("correct file path again");


	var lastScrollTop = 0;
	
	$(window).scroll(function(){
	
		var st = $(this).scrollTop();
	        if (st < lastScrollTop){
	        	$('#navbar').slideDown();
	        }
	        else {
	        	$('#navbar').slideUp();
	        }

	        lastScrollTop = st;

	 });

	$(".hoves").click(function(){
		$("html, body").animate({
			scrollTop: $("#ulhr").offset().top
		}, 500);
	});


	// $(".hoves").click(function(){
	// 	alert($(".projdiv").scrollTop());
	// });


	$("#full").click(function(){
		var current = $(".abtpicdiv").children();
		console.log(current);
		current.hide();
		$("#fullpic").toggle("slow");
	});

	$("#sports").click(function(){
		var current = $(".abtpicdiv").children();
		console.log(current);
		current.hide();
		$("#sportspic").toggle("slow");
	});

	$("#pets").click(function(){
		var current = $(".abtpicdiv").children();
		console.log(current);
		current.hide();
		$("#petspic").toggle("slow");
	});



	var currentIndex = 0;
    var itemCount = $('.carousel > li').length;

  	/* add the active class to the first item to hide all the others */
  	$('.carousel > li:eq(' + currentIndex + ')').addClass('active');

  	$('.carousel-nav').on('click', function() {
    	var $active = $('.carousel > li.active');
        var isNext = $(this).hasClass('next');
    	currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

   		/* go back to the last item if we hit -1 */
    	if (currentIndex === -1) {
      		currentIndex = itemCount - 1;
    	}

    	var $next = $('.carousel > li:eq(' + currentIndex + ')');
    	$active.addClass(isNext ? 'next-out' : 'prev-out');
    	$next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');

    	setTimeout(function() { 
      		$active.removeClass('active next-out prev-out');
      		$next.removeClass('next-in prev-in');
    	}, 500);

    	return false;
  	});


});