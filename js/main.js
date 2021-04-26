;
(function() {

    'use strict';

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var mobileMenuOutsideClick = function() {

        $(document).click(function(e) {
            var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ($('body').hasClass('offcanvas')) {

                    $('body').removeClass('offcanvas');
                    $('.js-fh5co-nav-toggle').removeClass('active');

                }


            }
        });

    };


    var offcanvasMenu = function() {

        $('#page').prepend('<div id="fh5co-offcanvas" />');
        $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
        var clone1 = $('.menu-1 > ul').clone();
        $('#fh5co-offcanvas').append(clone1);
        var clone2 = $('.menu-2 > ul').clone();
        $('#fh5co-offcanvas').append(clone2);

        $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
        $('#fh5co-offcanvas')
            .find('li')
            .removeClass('has-dropdown');

        // Hover dropdown menu on mobile
        $('.offcanvas-has-dropdown').mouseenter(function() {
            var $this = $(this);

            $this
                .addClass('active')
                .find('ul')
                .slideDown(500, 'easeOutExpo');
        }).mouseleave(function() {

            var $this = $(this);
            $this
                .removeClass('active')
                .find('ul')
                .slideUp(500, 'easeOutExpo');
        });


        $(window).resize(function() {

            if ($('body').hasClass('offcanvas')) {

                $('body').removeClass('offcanvas');
                $('.js-fh5co-nav-toggle').removeClass('active');

            }
        });
    };


    var burgerMenu = function() {

        $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
            var $this = $(this);


            if ($('body').hasClass('overflow offcanvas')) {
                $('body').removeClass('overflow offcanvas');
            } else {
                $('body').addClass('overflow offcanvas');
            }
            $this.toggleClass('active');
            event.preventDefault();

        });
    };

    var fullHeight = function() {

        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function() {
                $('.js-fullheight').css('height', $(window).height());
            });
        }

    };



    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function() {

                    $('body .animate-box.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '85%' });
    };


    var dropdown = function() {

        $('.has-dropdown').mouseenter(function() {

            var $this = $(this);
            $this
                .find('.dropdown')
                .css('display', 'block')
                .addClass('animated-fast fadeInUpMenu');

        }).mouseleave(function() {
            var $this = $(this);

            $this
                .find('.dropdown')
                .css('display', 'none')
                .removeClass('animated-fast fadeInUpMenu');
        });

    };


    var goToTop = function() {

        $('.js-gotop').on('click', function(event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function() {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };


    // Loading page
    var loaderPage = function() {
        $(".fh5co-loader").fadeOut("slow");
    };

    var counter = function() {
        $('.js-counter').countTo({
            formatter: function(value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };

    var counterWayPoint = function() {
        if ($('#fh5co-counter').length > 0) {
            $('#fh5co-counter').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(counter, 400);
                    $(this.element).addClass('animated');
                }
            }, { offset: '90%' });
        }
    };

    var parallax = function() {

        if (!isMobile.any()) {
            $(window).stellar({
                horizontalScrolling: false,
                hideDistantElements: false,
                responsive: true

            });
        }
    };

    var testimonialCarousel = function() {

        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true
        });
    };

    var sliderMain = function() {

        $('#fh5co-hero .flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            directionNav: true,
            start: function() {
                setTimeout(function() {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            },
            before: function() {
                setTimeout(function() {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }

        });

        $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
        $(window).resize(function() {
            $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
        });

    };


    $(function() {
        mobileMenuOutsideClick();
        offcanvasMenu();
        burgerMenu();
        contentWayPoint();
        sliderMain();
        dropdown();
        goToTop();
        loaderPage();
        counterWayPoint();
        counter();
        parallax();
        testimonialCarousel();
        fullHeight();
    });


    //my area//
    {
        //configuração do botão de enviar conteudo, na pagina de administração de conteudo//
        $('#enviarConteudo').on('click', function() {
            let fd = new FormData($("form[name='dados']")[0])
            fd.append('comando', 'enviarConteudo')

            $.ajax({
                type: 'post',
                url: 'php/blog.php',
                cache: false,
                data: fd,
                processData: false,
                contentType: false,
                success: function(e) {
                    document.write(e)
                }
            })
        })

        //--//

        // -- COOKIE -- //
        var purecookieTitle = "Cookies.",
            purecookieDesc = "Ao utilizar esse site, você automaticamente autoriza que utilizemos cookies.",
            purecookieLink = '<a href="https://www.advocaciaalineoliveira.com.br/php/politica-cookie.php" target="_blank">Para que ?</a>',
            purecookieButton = "Entendido";

        function pureFadeIn(e, o) {
            var i = document.getElementById(e);
            i.style.opacity = 0, i.style.display = o || "block",
                function e() {
                    var o = parseFloat(i.style.opacity);
                    (o += .02) > 1 || (i.style.opacity = o, requestAnimationFrame(e))
                }()
        }

        function pureFadeOut(e) {
            var o = document.getElementById(e);
            o.style.opacity = 1,
                function e() {
                    (o.style.opacity -= .02) < 0 ? o.style.display = "none" : requestAnimationFrame(e)
                }()
        }

        function setCookie(e, o, i) {
            var t = "";
            if (i) {
                var n = new Date;
                n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), t = "; expires=" + n.toUTCString()
            }
            document.cookie = e + "=" + (o || "") + t + "; path=/"
        }

        function getCookie(e) {
            for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) {
                for (var n = i[t];
                    " " == n.charAt(0);) n = n.substring(1, n.length);
                if (0 == n.indexOf(o)) return n.substring(o.length, n.length)
            }
            return null
        }

        function eraseCookie(e) {
            document.cookie = e + "=; Max-Age=-99999999;"
        }

        function cookieConsent() {
            getCookie("purecookieDismiss") || (document.body.innerHTML +=
                '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' +
                purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + " " + purecookieLink +
                '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton +
                "</a></div></div>", pureFadeIn("cookieConsentContainer"))
        }

        function purecookieDismiss() {
            setCookie("purecookieDismiss", "1", 3), pureFadeOut("cookieConsentContainer")
        }
     
        cookieConsent()

    } //enda my area//

}());
