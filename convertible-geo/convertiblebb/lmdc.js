jQuery(document).ready(function() {
    jQuery(".newsletter-form").bind("click", function(e){ e.stopPropagation() });
    jQuery(".newsletter").bind("click", function(e){ jQuery(".newsletter").hide() });
    jQuery('.newsletter-show').click(function() {
        jQuery(".newsletter").show();
    });
    jQuery('.top-newsletter img').click(function() {
        jQuery(".newsletter").hide();
    });
    jQuery('.dropdown-menu').each(function(){
        var parentWidth = jQuery(this).parent().innerWidth();
            var menuWidth = jQuery(this).innerWidth();
            var margin = (parentWidth / 2 ) - (menuWidth / 2);
            margin = margin + "px";
            jQuery(this).css("margin-left", margin);
    });

    jQuery(".nav-container").find("a").each(function(){
        jQuery(this).click(function(event) {
            if (event.which != 2) {
                document.location.href = jQuery(this).attr('href');
            };
        });
    });

    var loc = window.location.href;

    jQuery('.nav-container').find('a').each(function() {
      jQuery(this).toggleClass('active', jQuery(this).attr('href') == loc);
    });
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox && jQuery('.product-row').length > 0) {
        /*jQuery("<link />").attr({
            rel: 'stylesheet',
            type: 'text/css',
            media: 'all',
            href: 'http://lmdc.projets-en-cours.net/lmdc/skin/frontend/default/Grafikdev/css/firefox.css'
        }).appendTo('head');*/
        jQuery('.product-row').css('minHeight',jQuery('#product-left-block').height()+'px')
    };
    if (isFirefox && jQuery('.btn-account2').length > 0) {
        jQuery('.btn-account2').mousedown(function(){
            jQuery(this).css('text-indent','-2px')
        }).mouseup(function(){
            jQuery(this).css('text-indent','0px')
        });
        jQuery('.btn-account').mousedown(function(){
            jQuery(this).css('text-indent','-2px')
        }).mouseup(function(){
            jQuery(this).css('text-indent','0px')
        });
    };
    if (isFirefox && jQuery('.cart-button1').length > 0) {
        jQuery('.cart-button1').mousedown(function(){
            jQuery(this).css('text-indent','-2px')
        }).mouseup(function(){
            jQuery(this).css('text-indent','0px')
        });
        jQuery('.cart-button2').mousedown(function(){
            jQuery(this).css('text-indent','-2px')
        }).mouseup(function(){
            jQuery(this).css('text-indent','0px')
        });
    };

    /****************************/

    var maxHeight = 0;
  
    $(".gamme1-product-container .row").each(function(){
        $(this).find(".gamme-p2-p-title").each(function(){
           if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }

        });

        $(this).find(".gamme-p2-p-title").height(maxHeight);
        maxHeight = 0;
    });
 
    var maxHeightBloc = 0;
    
    setTimeout(function() {
    $(".gamme1-product-container .row").each(function(){

        $(this).find(".gamme-p2").each(function(){
           if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });

        $(this).find(".gamme-p2").height(maxHeight);
        maxHeight = 0;
    });
    }, 500); 
    var maxHeightBloc2 = 0;
    
    setTimeout(function() {
     $(".gamme1-product-container .row").each(function(){
        if($(this).find(".col-xs-8 .gamme-p1").height()>$(this).find(".col-xs-4 .gamme-p2").height()){$(this).find(".col-xs-4 .gamme-p2").height($(this).find(".col-xs-8 .gamme-p1").height());$(this).find(".col-xs-8 .gamme-p1").height($(this).find(".col-xs-4 .gamme-p2").height())}
        else{$(this).find(".col-xs-8 .gamme-p1").height($(this).find(".col-xs-4 .gamme-p2").height());
        $(this).find(".col-xs-4 .gamme-p2").height($(this).find(".col-xs-8 .gamme-p1").height());}
        maxHeight2 = 0;
    });
    }, 500); 
    if($(("#blogSlide").length)){
        $('.blog-articles .articles-list li a').click(function(event){
            event.preventDefault();
            $(this).parents('.articles-list').find('.active').removeClass('active');
            $(this).parents('li').addClass('active');
            symCustomSlide.gotoSlide($('#blogSlide'), $(this).parents("li").index());
        });
    }

    $(document).scroll(function() {
      if ($(window).scrollTop() <= 50) {
        $('#header').removeClass('header-sticky');      
        $('.back-top').stop().animate({opacity: 0}, 200);         
      } else {
        if(!($('.blog a.logo').length)) {      
          $('.back-top').stop().animate({opacity: 1}, 200);
          $('#header').addClass('header-sticky');
        }else if(!($('.blog a.logo').css('display')=='block')){
          $('.back-top').stop().animate({opacity: 1}, 200);
          $('#header').addClass('header-sticky');
        }
      }   
    });

  //
  $('.back-top').click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  /**change placeholder of selects**/
  $.each($('.selectized + .ms-parent .placeholder'), function() {
    $(this).html($(this).closest('.ms-parent').prev('.selectized').attr("data-placeholder"));
  });

    // Show element when click on multi-color icon
    $(".multi-color").click(function (){
    $(".plus-coloris").fadeIn(200);
    $(".showcase-thumbnail-wrapper:visible  div[id='showcase-thumbnail-3']").click();
  });


});
