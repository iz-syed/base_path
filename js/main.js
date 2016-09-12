$(function(){
	alert('Hi');
/* Functions */
window.onbeforeunload = function(){
	window.scrollTo(0,0);
}
/* Ready Function */
$(function(){
	/* Body Fadein */
	$('body').animate({opacity:1},1000);
	/* Scroll Animation */ 
	$('*[data-animated]').addClass('animated');
	/* Animate */	
	function animated_contents() {
		$(".animated:appeared").each(function (i) {
			var $this    = $(this),
				animated = $(this).data('animated'),
				delay = $(this).data('delay');
			setTimeout(function () {
				$this.addClass(animated);
				$this.addClass('delay'+delay);
			}, 70 * i);
		});
	}
	$(window).scroll(function() {
		animated_contents();
	});

	/* Parallex Move */
	/*$('.circleTrust').parallax("50%", 0.1);*/
	//$('.intro').parallax("50%", 0.85);
	/* Background Image */
	$('[data-bg]').each(function(){
		var curBg = $(this).data('bg');
		$(this).css('background-image','url('+curBg+')');
	});  
	/* Tab */
	$('.tabTitle a').click(function(e){

	if(!$(this).hasClass('active')){
		$('.tabTitle a').removeClass('active');
		$(this).addClass('active');
		var tabIdentity = $(this).data('tab');
		$('.tabFeature').hide();
		$('#'+tabIdentity).fadeIn(800);
	}
	return false;
	});




	// table dynamic data content
	$('table tr td').each(function(index, element) {
		var th = $('table thead th').eq($(this).index()).text();
        $(this).attr('data-title', th);
    });

 	// /*jquery ui selectbox*/
	// $.widget('app.selectmenu', $.ui.selectmenu, {
	// 	_drawButton: function() {
	// 		this._super();
			
	// 		var selected = this.element
	// 				.find( '[selected]' )
	// 				.length,
	// 			placeholder = this.options.placeholder;
			
	// 		if ( !selected && placeholder ) {
	// 			this.buttonText.text( placeholder );    
	// 		}
	// 	}
	// });

	/* Generic Slide */
	$('.genericSlide').slick({
		dots: false,
		arrows: true,
    	infinite: false,
		prevArrow: '<div class="triangleArrow slick-prev"><img src="images/triangleRight.png"/></div>',
		nextArrow: '<div class="triangleArrow slick-next"><img src="images/triangleLeft.png"/></div>',
  		slidesToShow: 1,
  		slidesToScroll: 1,
	});


	// jQueryUI Toogle
	$('.accordion').accordion({
		heightStyle: "content",
		collapsible: true,
    	active: false
	
	});

	// jQueryUI Tabs
    $( "#tabs" ).tabs();

    // jQueryUI Check box + Radio Boxes
    $( "input" ).checkboxradio({ icon: false });



	// $( "#files" ).selectmenu();


	/* Scroll to next */
	$('a.scrollToNext').on('click', function(){
		var $thisHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $($thisHref).offset().top
		}, 1000);
		return false;
	});


	// Get OS
	var os = [ 'iphone', 'ipad', 'windows', 'mac', 'linux'];

	// Match OS
	var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
	// concordinate 
	var classes = match[0]+' '+$.browser.name+' '+$.browser.version;
	// add OS + Browser + Version.
	if (match) {
		$('body').addClass(classes);
	};



});
/* Resize Function */
if(!Modernizr.touch) { 
	$(window).resize(function(){
		
	});
}
/* Orientation Function */
$(window).on("orientationchange",function(){
	
});
});

