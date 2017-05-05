 $(document).ready(function(){
    $('.mob_serch_icon').click(function(){
        $(".mobile_search").addClass("active").show();
        });
        $('.close_search').click(function(){
           $(".mobile_search").addClass("no_active").hide();
      });
});
jQuery(document).ready(function(){
    var text_height = $('.show_more_text').outerHeight();
    var max_height = parseInt($('.show_more_text').css('max-height'));
    if(text_height < max_height){
        $('.show_more, .hide_content').hide();
    }
    $('.show_more').click(function(){
        $(this).hide();
        $(this).siblings('.show_more_text').animate({'max-height':'2000px'}, 500);
        $(this).siblings('.show_more_text').find('.hide_content').animate({'bottom':'-35px'}, 500);
        return false;
    });
}); 
  $(document).ready(function(){
$('li.dropdown').hover(function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
 });
/*slider*/
    $(document).ready(function(){
    $(".navbar-toggle, .close_menu").click(function() {
        $( ".mobile_menu" ).stop().slideToggle( "slow" );
    });
    $(".show_btn").click(function() {
        if($(this).hasClass('open')){
          $(this).text('Свернуть каталог').removeClass('open').addClass('close_btn_p');
        }else{
          $(this).text('Каталог').removeClass('close_btn_p').addClass('open');
        }
    });
});
jQuery(document).ready(function(){
    function htmSlider(){
        /*var slideWrap = jQuery('.slide_wrap');    */   
        var nextLink = jQuery('.next_slide');
        var prevLink = jQuery('.prev_slide');      
        var is_animate = false;           
        nextLink.click(function(){
        	var slideWrap =	$(this).parent(".slider").find(".slide_wrap");
        	var slideWidth = $(this).parent(".slider").find('.slide_item').outerWidth();
        	var newLeftPos = slideWrap.position().left - slideWidth;
            if(!slideWrap.is(':animated')) {
                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                       	.find('.slide_item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                });
            }
        });                                             
        prevLink.click(function(){
        	var slideWrap =	$(this).parent(".slider").find(".slide_wrap");
        	var slideWidth = $(this).parent(".slider").find('.slide_item').outerWidth();
        	var newLeftPos = slideWrap.position().left - slideWidth;
            if(!slideWrap.is(':animated')) {
                slideWrap
                    .css({'left': newLeftPos})
                 	.find('.slide_item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 500);
            }
        });   
 
    }                                     
    htmSlider();
});


 

