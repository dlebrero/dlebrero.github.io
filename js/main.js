/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  

(function($) {


  	/*----------------------------------------------------*/
  	/* Backstretch
  	/*----------------------------------------------------*/

  	if($("html").hasClass('ie8')) {
  		$("#hero").backstretch("images/hero-bg.jpg");  	
  		$("#page-title").backstretch("images/hero-bg.jpg");	
  	} 

   /*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#page-title h1').fitText(1, { minFontSize: '38px', maxFontSize: '54px' });

  	}, 100);


	/*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var header = $('#main-header');

	   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');
	   }
      else {
         if (y < h + 30) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});

   /*-----------------------------------------------------*/
	/* Alert Boxes
  	-------------------------------------------------------*/
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


   /*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var menu_icon = $("<span class='menu-icon'></span>");
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "<span class='menu-text'>Menu</span>",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


  	/*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#nav-wrap a");

	if($("body").hasClass('homepage')) {

		sections.waypoint( {

	      handler: function(event, direction) {

			   var active_section;

				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

	         navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

			},
			offset: '25%'
		});

	}

   /*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$(window).load(function() {  		

	  	$('#hero-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: ".flex-container",
	      animation: 'fade',
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false
	   });	   

   });

 
	/*----------------------------------------------------*/
	/*	contact form
	------------------------------------------------------*/

   $('form#contactForm button.submit').on('click', function() {

      $('#image-loader').fadeIn();

      var contactFname = $('#contactForm #contactFname').val();
      var contactLname = $('#contactForm #contactLname').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactFname=' + contactFname  + '&contactLname=' + contactLname + 
                 '&contactEmail=' + contactEmail + '&contactSubject=' + contactSubject + 
                 '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


	/*-----------------------------------------------------*/
  	/* Back to top
   ------------------------------------------------------ */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (jQuery(window).scrollTop() >= pxShow) {
			jQuery("#go-top").fadeIn(fadeInTime);
		} else {
			jQuery("#go-top").fadeOut(fadeOutTime);
		}

	}); 


   var rightbanner = [
   '<a href="https://www.tkqlhce.com/click-100274552-14052108" target="_top" ><img src="https://www.tqlkg.com/image-100274552-14052108" width="160" height="600" alt="Free resources" border="0"/></a>',
'<a href="https://www.kqzyfj.com/click-100274552-14049881" target="_top"><img src="https://www.tqlkg.com/image-100274552-14049881" width="160" height="600" alt="Navigate the Change" border="0"/></a>',
'<a href="https://www.kqzyfj.com/click-100274552-14045082" target="_top"><img src="https://www.awltovhc.com/image-100274552-14045082" width="160" height="600" alt="Stay Ahead of the Curve!" border="0"/></a>',
 '<a href="https://www.tkqlhce.com/click-100274552-14045054" target="_top"><img src="https://www.ftjcfx.com/image-100274552-14045054" width="160" height="600" alt="Stay Ahead of the Curve!" border="0"/></a>',
'<a href="https://www.jdoqocy.com/click-100274552-14045032" target="_top"><img src="https://www.tqlkg.com/image-100274552-14045032" width="160" height="600" alt="Stay Ahead of the Curve!" border="0"/></a>',
'<a href="https://www.anrdoezrs.net/click-100274552-13722489" target="_top"><img src="https://www.tqlkg.com/image-100274552-13722489" width="160" height="600" alt="Start Learning Today!" border="0"/></a>'
   ];

   var banneridx=Math.floor(Math.random() * (rightbanner.length));
   console.log(banneridx);
   var rbanner = rightbanner[banneridx];
   console.log(rbanner);
   $(rbanner).appendTo($('#rightbanner'));

    var bottombanner = [
    '<a href="https://www.anrdoezrs.net/click-100274552-14049886" target="_top"><img src="https://www.awltovhc.com/image-100274552-14049886" width="728" height="90" alt="Navigate the Change" border="0"/></a>',
    '<a href="https://www.kqzyfj.com/click-100274552-14052112" target="_top"><img src="https://www.ftjcfx.com/image-100274552-14052112" width="728" height="90" alt="Free resources" border="0"/></a>',
    '<a href="https://www.jdoqocy.com/click-100274552-14045086" target="_top"><img src="https://www.lduhtrp.net/image-100274552-14045086" width="728" height="90" alt="Stay Ahead of the Curve!" border="0"/></a>',
    '<a href="https://www.tkqlhce.com/click-100274552-14045064" target="_top"><img src="https://www.tqlkg.com/image-100274552-14045064" width="728" height="90" alt="Stay Ahead of the Curve!" border="0"/></a>',
    '<a href="https://www.dpbolvw.net/click-100274552-14045038" target="_top"><img src="https://www.lduhtrp.net/image-100274552-14045038" width="728" height="90" alt="Stay Ahead of the Curve!" border="0"/></a>',
    '<a href="https://www.jdoqocy.com/click-100274552-13722494" target="_top"><img src="https://www.ftjcfx.com/image-100274552-13722494" width="728" height="90" alt="Start Learning Today!" border="0"/></a>'
    ];

   var bbanner = bottombanner[Math.floor(Math.random() * (bottombanner.length))];
   $(bbanner).appendTo($('#bottombanner'));

})(jQuery);