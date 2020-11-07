/*global $, alert, console*/

$(function () {
    'use strict';
    
    // Trigger Nice Scroll Plugin
    

    
    //Change image header height
    
    $(".header").height($(window).height());
    
    
    // scroll to features
    
    $(".header .arrow i").click(function () {
        $("html, body").animate({
            
            scrollTop: $(".features").offset().top
            
        }, 1000);
    });
    
    $(".header .intro .buttons").click(function () {
        $("html, body").animate({
            scrollTop: $(".testim").offset().top
        }, 1000);
    });
    
    $(".header .intro .buttons").click(function () {
        $("html, body").animate({
            scrollTop: $(".scroll").offset().top
        }, 1000);
    });
    
    $(".show-more").click(function () {
        $(".our-work .hidden").fadeIn(1000);
    });
    
    // Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClient() {
        
        $(".client:first").hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $(".client:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();
    };
    checkClient();
    
    $(".testim i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".testim .active").fadeOut(100, function () {
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                
                checkClient();
            });
        } else {
            $(".testim .active").fadeOut(100, function () {
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                
                checkClient();
            });
        }
    });
    
});