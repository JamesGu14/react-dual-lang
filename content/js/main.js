jQuery(document).ready(function(){
    "use strict";


/* ==================================================================
                    Accordion Icon
================================================================== */
    $('.trd-accordion-items').on('shown.bs.collapse', function(){
        $(this).find(".trd-expandable-icon").removeClass("trd-collapsed").addClass("trd-expand").children('i').removeClass('fa fa-plus').addClass('fa fa-minus');
    }).on('hidden.bs.collapse', function(){
        $(this).find(".trd-expandable-icon").removeClass("trd-expand").addClass("trd-collapsed").children('i').removeClass('fa fa-minus').addClass('fa fa-plus');
    });

/* ==================================================================
                    WOW JS
================================================================== */
  var e = new WOW({
      boxClass: "appear",
      animateClass: "animated",
      offset: 100,
      mobile: !1,
      live: !0,
      callback: function(e) {}
  });
  e.init();

/* ==================================================================
                    Counter
================================================================== */
    $('.trd-counter-section').waypoint(function(direction) {
            $('.trd-count').countTo({
                speed: 3500
            });
            this.destroy()
        }, {
            offset: 'bottom-in-view'
        });
        
        // Resize
        $(function(){
            $(window).on("resize.showContent", function() {
            var windowsize = $(window).width();
            if(windowsize <= 767) {

                $('.trd-counter-section').waypoint(function(direction) {
                    $('.trd-count').countTo({
                        speed: 3500
                    });
                    this.destroy()
                }, {
                    offset: '25%'
                });

              }
            }).trigger("resize.showContent")
        });

/* ==================================================================
                    Minified Header
================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 1) {
            $('.trd-header').addClass('minified');
        } else {
            $('.trd-header').removeClass('minified');
        }
    });

/* ==================================================================
                    Responsive Menu (Mobile)
================================================================== */
    $(".navbar-collapse").css({ 
        maxHeight: $(window).height() - $(".navbar-header").height() + "px" 
    });


/* ==================================================================
                    Same Height
================================================================== */
    var mapWrapper = $('.trd-map-wrapper'),
        mapNextHeight = mapWrapper.next().outerHeight();

        $(window).resize(function() {
            if ($(this).width() < 768) {

               var sectionHeight = $(window).height() - 80;

                mapWrapper.css({
                    height: sectionHeight,
                });
            } else {
                mapWrapper.css({
                    height: mapNextHeight
                });
            }
        });
        
        $(window).trigger('resize');


/* ==================================================================
                    Select 2 Dropdown
================================================================== */
    function languageFlag (language) {
            if (!language.id) { return language.text; }
            var $language = $(
                '<span><img src="images/flags/' + language.element.value.toLowerCase() + '.png" class="img-flag" /> ' + language.text + '</span>'
            );
            return $language;
        };

        $(".trd-multilang-opt").select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: "trd-lang-dropdown",
            templateResult: languageFlag,
            templateSelection: languageFlag,
        });


/* ==================================================================
                    Skillbar
================================================================== */
        $('.trd-skillbar').waypoint(function(direction) {
            $('.trd-skillbar[data-percent]').each(function () {
                var skillbarWrapper = $(this);
                var progress = $(this).find('span.skill-bar-percent');
                var percentage = Math.ceil($(this).attr('data-percent'));
                    $({countNum: 0}).animate({countNum: percentage}, {
                      duration: 3000,
                      step: function() {
                        // What todo on every count
                      var pct = '';
                      if(percentage == 0){
                        pct = Math.floor(this.countNum) + '%';
                      }else{
                        pct = Math.floor(this.countNum+1) + '%';
                      }
                      progress.text(pct) && skillbarWrapper.find('.trd-skillbar-bar').css('width',pct);
                      }
                    });
                  })
                this.destroy()
            }, {
            offset: 'bottom-in-view'
        });

/* ==================================================================
                    Slick Slider
================================================================== */
        $('#trd-testimonial').slick({
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '30px',
            responsive: [{
              breakpoint: 1023,
              settings: {
                slidesToShow: 3
              }

            }, {

              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                centerPadding : '20px'
              }

            }]
        });

/* ==================================================================
                    Slider Pro
================================================================== */
        $(window).resize(function() {
            var windowHeight = $(window).height() ,
                siliderHeight = windowHeight - 35;

            $( '#trd-hero-slider' ).sliderPro({
                width: '100%',
                height : siliderHeight,
                fade: true,
                loop: false,     // Set it true if you add 3+ slides
                forceSize: 'fullWidth',
                arrows: true,
                waitForLayers: false,
                buttons: false,
                autoplay: true,
                autoplayDelay: 8000,
                autoplayOnHover: 'none',
                autoScaleLayers: false,
                slideAnimationDuration: 2000,
                breakpoints: {
                    767: {
                        height : windowHeight
                    }
                }
            });
        });
        $(window).trigger('resize');

/* ==================================================================
                    Isotope
================================================================== */
        var $gridPostContainer = $('.trd-blog-post-wrapper');

        $gridPostContainer.imagesLoaded(function(){
            $gridPostContainer.isotope({
                itemSelector : '.trd-blog-posts',
                masonry: {
                columnWidth: 1,
              }
            });
        });
});