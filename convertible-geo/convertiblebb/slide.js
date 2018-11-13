(function($){
  /*
   * symCustomSlide
   * auto init class "custom-slide"
   * get param "loop" from data-loop
   * get param "pager" from data-pager
   *
   */
  $(document).ready(function(){
    /* symCustomSlide */
    window.symCustomSlide = {
      setClasses : function(last_active, prev, active, next){
        active.add(active.siblings()).removeClass("prev").removeClass("active").removeClass("next").removeClass("anim").removeClass("before").removeClass("after");
        last_active.addClass("anim");
        active.addClass("active").addClass("anim");
        active.prevAll().addClass("before");
        active.nextAll().addClass("after");
        if(!prev.hasClass("active")){
          prev.removeClass("before").removeClass("after").addClass("prev");
        }
        if(!next.hasClass("active")){
          next.removeClass("before").removeClass("after").addClass("next");
        }
      },
      gotoSlide : function(slider, i){
        var loop = slider.data("loop");
        loop = (loop!==undefined)?loop:true; // default = true
        /**/
        i = i % slider.find(".el").length;
        var prev = slider.find(".el").eq(i).prev();
        if(!prev.length && loop){
          prev = slider.find(".el").last()
        }
        var active = slider.find(".el").eq(i);
        var next = slider.find(".el").eq(i).next();
        if(!next.length && loop){
          next = slider.find(".el").first()
        }
        if(slider.find(".pager li").length){
          slider.find(".pager li").removeClass("active").eq(i).addClass("active").trigger('classChange');
        }
        var last_active = slider.find(".el.active");
        window.symCustomSlide.setClasses(last_active, prev, active, next);
      },
      init : function(){
        $(".custom-slide:not(.precessed)").each(function(){
          $(this).addClass("precessed");
          /* control */
          $(this).find(".next-slide").click(function(){
            var slider = $(this).closest(".custom-slide");
            var i = slider.find(".el.active").index()+1;
            window.symCustomSlide.gotoSlide(slider, i);
          });
          $(this).find(".prev-slide").click(function(){
            var slider = $(this).closest(".custom-slide");
            var i = slider.find(".el.active").index()-1;
            window.symCustomSlide.gotoSlide(slider, i);
          });
          /* pager */
          if($(this).data("pager")){
            var pager = $('<ol class="pager"></ol>').appendTo(this);
            $(this).find(".el").each(function(){
              var page = $('<li></li>').appendTo(pager);
              page.click(function(){
                var slider = $(this).closest(".custom-slide");
                var i = $(this).index();
                window.symCustomSlide.gotoSlide(slider, i);
              });
            });
          }
          /* init */
          window.symCustomSlide.gotoSlide($(this), 0);
          /* swipe */
          if(document.ontouchmove!==undefined){
            $(this).on("swipeleft", function(e) {
              $(this).find(".next-slide").click();
            }).on("swiperight", function(e) {
              $(this).find(".prev-slide").click();
            });
          }
        });
      }
    }
    window.symCustomSlide.init();
  });
})(jQuery);
