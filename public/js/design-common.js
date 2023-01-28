//toggle the component with class accordion_body
$(".accordion-head").click(function () {
	$(".accordion-head").find('.accor-icon').rotate(0);
	if ($(".accordion-data").is(':visible')) {
		$(".accordion-data").slideUp(300);
		$(".accordion-head").find('.accor-icon').rotate(0);
	}
	
	if ($(this).next(".accordion-data").is(':visible')) {
		$(this).next(".accordion-data").slideUp(300);
		$(this).find('.accor-icon').rotate(0);
	} else {
		$(this).next(".accordion-data").slideDown(300);
		$(this).find('.accor-icon').rotate(45);
	}
});


$('.inr-drp').parent().addClass('dropdown');
	$('li.dropdown').hover(function() {
		$(this).find('.inr-drp').css({
		'opacity': 0,
		'margin-top': 30
		}).show().animate({
			'margin-top': 0,
			'opacity': 1
			}, 300);
		}, function() {
		$(this).find('.inr-drp').fadeOut(200, function() {
		$(this).hide();
	});
});


$('.inr-drp').hover(function(){
		$(this).prev().css("color","#00a9b4");
	},
	function(){
		$(this).prev().removeAttr("style");
	});
/* scroll smooth to target */

$('a.scroll').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1500);
    return false;
});

$('a.scroll-2').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 3000);
    return false;
});



if ( $( ".vertical-scroll" ).length ) {
    (function($){
            $(window).load(function(){

                $(".vertical-scroll").mCustomScrollbar({
					autoHideScrollbar:true,
					mouseWheelPixels: 100
				});
            });
    })(jQuery);
}

if ( $( ".horizontal-scroll" ).length ) {
    (function($){
            $(window).load(function(){

                $(".horizontal-scroll").mCustomScrollbar({
                    axis:"x",
                    advanced:{
                            autoExpandHorizontalScroll:true,
							mouseWheelPixels: 100
                    }
                });
            });
    })(jQuery);
}

function ImpDatesWidth(){
	var ImpMainWidth = $('.imp-dates').outerWidth(true );
	var ImpDTWidth = $('.imp-dates .date').outerWidth(true);
	var ImpBulletWidth = $('.imp-dates .bullet-design').outerWidth(true);
	var ImpDTBullet = ImpDTWidth + ImpBulletWidth;
	$('.submission-of').width(ImpMainWidth - ImpDTBullet - 28); 
}

$(".menu-box").click(function(){
	$('.main-drp-nav').slideToggle();
});

if(document.getElementById("fancy")){
	$('.fancybox').fancybox({
		padding:0,
		//backdrop: static,
		keyboard: false,	
	});
}

function MainNav(){
		
	if($(window).width() > 1070){
		$(".main-drp-nav").removeAttr('style');
	}
}



$(document).ready(function(){
	
	ImpDatesWidth();
	MainNav();
	

});




$(window).resize(function(){
	ImpDatesWidth()
	MainNav();
});


/* bricklayer */
if ( $( ".bricklayer" ).length ) {

function newBox() {
  var randomColor = '#' + Math.random().toString(16).substr(-6);
  var heights = [50, 90, 150, 190, 230];
  var randomHeight = heights[Math.floor(Math.random() * heights.length)];
  var box = document.createElement('div');
  box.className = 'box';
  box.style.backgroundColor = randomColor;
  box.style.height = randomHeight + "px";
  return box;
}

var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

bricklayer.on("breakpoint", function (e) {
  console.log(e.detail.columnCount);
})

bricklayer.on("afterPrepend", function (e) {
  var el = e.detail.item;
  el.classList.add('is-prepend');
  setTimeout(function () {
    el.classList.remove('is-prepend');
  }, 500);
})

bricklayer.on("afterAppend", function (e) {
  var el = e.detail.item;
  el.classList.add('is-append');
  setTimeout(function () {
    el.classList.remove('is-append');
  }, 500);
});

////////////////////////////////////////////////////////////

var buttons = document.querySelectorAll("button");

function goToScroll(value) {
  document.body.scrollTop = value
}
Array.prototype.slice.call(buttons).forEach(function (button) {
  button.addEventListener('click', function (e) {
    var button = e.target
    var box = newBox();

    box.innerHTML = (bricklayer.elements.length + 1);

    if (button.hasAttribute("data-append")) {
      bricklayer.append(box);
      goToScroll(document.body.scrollHeight)
    }

    if (button.hasAttribute("data-prepend")) {
      bricklayer.prepend(box);
      goToScroll(0)
    }

    if (button.hasAttribute("data-append-multiple")) {
      var anotherBox = newBox();
      anotherBox.innerHTML = (bricklayer.elements.length + 2);
      bricklayer.append([box, anotherBox]);
      goToScroll(document.body.scrollHeight)
    }
  });
});
}

if(document.getElementById("home-slider")){
$(document).ready(function() {

	var owl = $("#home-slider");
	
	owl.owlCarousel({
		navigation : false,
		singleItem:true,
		items:1,
		dots:false,
		rewind:true,
		autoplay:true,
		animateOut: 'fadeOut',
	});

});
}