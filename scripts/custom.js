//------------------------------------------------------------------------
//								PRELOADER SCRIPT
//------------------------------------------------------------------------
$(window).load(function() { // makes sure the whole site is loaded

	"use strict";
    
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('.clock').fadeOut(); // will first fade out the loading animation
	
	new WOW().init();
	
	$.stellar();
	
})




$(document).ready(function(){
	
	"use strict";	
	
//------------------------------------------------------------------------
//						TESTIMONIALS SLIDER SETTINGS
//------------------------------------------------------------------------
    var owl = $("#testimonials-slider");
    owl.owlCarousel({
        items : 5, 
        itemsDesktop : [1400,4], 
        itemsDesktopSmall : [1200,3], 
        itemsTablet: [900,2], 
        itemsMobile : [600,1],
		autoPlay : 4000,
		stopOnHover:true
    });
	
	
	 
	 
//------------------------------------------------------------------------
//						INTRO SUPERSLIDER SETTINGS
//------------------------------------------------------------------------
	$("#slides").superslides({
		play: 8000, //Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
		animation: "fade", //slide or fade. This matches animations defined by fx engine.
		pagination: false, //Generate pagination. Add an id to your slide to use custom pagination on that slide.
		inherit_height_from:"#intro" // Accepts window or element selector. Use to constrain slider to an element's height.
		
		// more options: https://github.com/nicinabox/superslides
	});
		

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*3), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
jQuery("#Liisa").fitText()

	
//------------------------------------------------------------------------
//					SUBSCRIBE FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------          
    $('#subscribe_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest("form"));
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    }); 
	

		
				
//------------------------------------------------------------------------------------
//						SUBSCRIBE FORM MAILCHIMP INTEGRATIONS SCRIPT
//------------------------------------------------------------------------------------		
    $('#subscribe_form').submit(function() {
        $('.error').hide();
        $('.error').fadeIn();
        // submit the form
        if($(this).valid()){
            $('#subscribe_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    newsletter_email: $('#subscribe_email').val()
                },
                success: function(data) {
                    $('#subscribe_submit').button('reset');
					
					//Use labels to display messages
                    //$('.error').html(data);
					
					//Use modal popups to display messages
					$('#modalSubscribe .modal-title').html('<i class="icon-envelope-letter"></i>' + data);
					$('#modalSubscribe').modal('show');
					
                },
                error: function() {
                    $('#subscribe_submit').button('reset');
					
                    //Use labels to display messages
                   	//$('.error').html('Oops! Something went wrong!');
					
					//Use modal popups to display messages
					$('#modalSubscribe .modal-title').html('<i class="icon-ban"></i>Oops!<br>Something went wrong!');
					$('#modalSubscribe').modal('show');
					
                }
            });
        // return false to prevent normal browser submit and page navigation 
        }
        return false; 
    });
	  
	


	
//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------		
$(".selector").validate({
  debug: true
});
    $('#contact_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
            	required: true,
            	phoneUS: true
            },
            zip: {
            	required: true,
            	digits: true,
            	minlength: 5,
            	maxlength: 5
            },
            age: {
            	required: true,
            	digits: true,
            	minlength: 2,
            	maxlength: 2
            },
            investment: {
                required: true,
                minlength: 4,
            }
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            },
            phone: {
            	required: "What's your phone #?",
            	phoneUS: "Please enter a valid phone #"
            },
            zip: {
            	required: "What's your zip code?",
            	digits: "Please enter a valid zip code",
            	minlength: "Please enter a valid zip code",
            	maxlength: "Please enter a valid zip code"
            },
            age: {
            	required: "How old are you?",
            	digits: "Please enter a valid age",
            	minlength: "Please enter a valid age",
            	maxlength: "Please enter a valid age"
            },
            investment: {
                required: "Please enter an amount",
                minlength: "Please enter a valid amount",
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   





//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------	

    $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactphone: $('#contact_phone').val(),
                    contactzip: $('#contact_zip').val(),
                    contactage: $('#contact_age').val(),
                    contactinvestment: $('#contact_investment').val()                },
                success: function() {
                    $('#contact_submit').button('reset');
                    $('#modalContact .modal-title').html('<i class="icon-paper-plane"></i>Thank You for your request!<br>We will be contacting you shortly.');
                    $('#modalContact').modal('show');
                },
                error: function() {
                    $('#contact_submit').button('reset');
                    $('#modalContact .modal-title').html('<i class="icon-ban"></i>Oh no!<br>Something went wrong!');
                    $('#modalContact').modal('show');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        } else {
            $('#contact_submit').button('reset')
        }
        return false; 
    });	        

});