var mainJs = (function(){
	'use strict';

	var modModal = $('.modal');
	// click video show popup video and play
	function autoPlayYouTubeModal(){
		var trigger = $("body").find('[data-toggle="modal"]');
		trigger.click(function() {
			var theModal = $(this).data("target"),
			videoSRC = $(this).attr( "data-theVideo" ),
			videoSRCauto = videoSRC ;
			if(videoSRC){
				$(theModal+' iframe').attr('src', videoSRCauto);
				$(theModal).on("click",function(){

					$(this).find("iframe").attr("src",videoSRC);
				});
			}
		});
	};

	// set popup video midle screen
	function adjustModalMaxHeightAndPosition(){
		$('.modal').each(function(){
			if($(this).hasClass('in') === false){
				$(this).show();
			}
			var contentHeight = $(window).height() - 60;
			var headerHeight = $(this).find('.modal-header').outerHeight() || 2;
			var footerHeight = $(this).find('.modal-footer').outerHeight() || 2;

			$(this).find('.modal-content').css({
				'max-height': function () {
					return contentHeight;
				}
			});
			$(this).find('.modal-body').css({
				'max-height': function () {
					return contentHeight - (headerHeight + footerHeight);
				}
			});
			$(this).find('.modal-dialog').addClass('modal-dialog-center').css({
				'margin-top': function () {
					return -($(this).outerHeight() / 2);
				},
				'margin-left': function () {
					return -($(this).outerWidth() / 2);
				}
			});
			if($(this).hasClass('in') === false){
				$(this).hide();
			}
		});
	};

	function hasModal () {
		if (modModal.length >0) {
			autoPlayYouTubeModal();
			adjustModalMaxHeightAndPosition();
			
		};
	}

	$(document).ready(function() { 
		hasModal();
		// scroll web on top
		$('html, body').animate({scrollTop: $('body').offset().top+0}, '30');

		// click Scroll-Down roll donw
		$('.Scroll-Down').click(function(event) {
			$('html, body').animate({scrollTop: $('.section2').offset().top+0}, '300');
		});

		// click show menu
		$('#header .menu-control').click(function(event) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('#header .menu-home').removeClass('active');
			}
			else{
				$(this).addClass('active');
				$('#header .menu-home').addClass('active');
			};
		});

		// click show menu video
		$('.l-menu-video .menu-control').click(function(event) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.l-menu-video .menu-home').removeClass('active');
			}
			else{
				$(this).addClass('active');
				$('.l-menu-video .menu-home').addClass('active');
			};
		});

		// scroll down l-menu-video pin
		$(window).scroll(function(){
			// if($(document).scrollTop()> $activeMenu){
			// 	$("body").addClass("scroll-layout");
			// }
			// else{
			// 	$("body").removeClass("scroll-layout")
			// };
			// if($(document).scrollTop()> 0){
			// 	$('#header').addClass('scroll-layout');
			// 	$('.menu-home').removeClass('full-menu');
			// }
			// else{
			// 	$('#header').removeClass('scroll-layout');
			// 	$('.menu-home').addClass('full-menu');
			// };
		});

		
		// close popup video and video stop
		$('.modal-video .close').click(function(event) {
			$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');   
		});


	});
$(window).load(function() {
	// window loaded hidden loadding
	setTimeout(function() {
		$('#loading').fadeOut();
		$(window).scroll(function(){
			if($(document).scrollTop()> 0){
				$('#header').addClass('scroll-layout');
				$('.menu-home').removeClass('full-menu');
			}
			else{
				$('#header').removeClass('scroll-layout');
				//$('.menu-home').addClass('full-menu');
			};
		});
	}, 500);

	setTimeout(function() {
		$('html, body').animate({scrollTop: $('body').offset().top+0}, '30');
		
	}, 200);

	var ani =10;
	var timer2 = setTimeout(function() {
		var timer = setInterval(function(){
			if (ani<110) {
				$('.pace-inactive').css('width', ani + "%");
				ani = ani +10;
			};
			if (ani>80) {
				$('.menu-home').addClass('full-menu');
				$('.pace-inactive').addClass('out');
			};
			if (ani>90) {
				$('.menu-home').addClass('show-menu');
				//$('.pace-inactive').addClass('out');
			};
			if (ani>100) {
				//alert();
				clearInterval(timer2);
				clearInterval(timer);
			};
			

		}, 200);
	}, 850);


});

$(window).resize(function(){

});

return {
	autoPlayYouTubeModal: autoPlayYouTubeModal,
	hasModal: hasModal,
	adjustModalMaxHeightAndPosition: adjustModalMaxHeightAndPosition
};
})();

//var $activeMenu = $('.l-menu-video').offset().top;


