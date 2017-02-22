$(function() {
    //////////////////////////////////
    //3D About Effect
    //////////////////////////////////
    var pageX = $(document).width() / 2;
    var pageY = $(document).height() / 2;
    //Retrieve Mouse Data & Rotate Container
    $('.homepage-wrap').mousemove(function(e) {
        mouseX = e.pageY;
        mouseY = e.pageX;
        rotateY = (pageY / 2 - e.pageX) / 30;
        rotateX = (pageX / 2 - e.pageY) / 15;
        $('.box').css({
            'transform': 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(-50%,-50%) '
        });
    });
    //////////////////////////////////
    //Color Changing Pyramid
    //////////////////////////////////
    var $work = $('.homepage-wrap'),
        w = 0,
        h = 0,
        rgb = [],
        getWidth = function() {
            w = $work.width();
            h = $work.height();
        };
    //Gets the Width and Height of page
    $work.resize(getWidth).mousemove(function(e) {
        //list of different RGB colors responding to the mouseplacement
        rgb1 = [
            100,
            Math.round(e.pageY / w * 255),
            Math.round(e.pageX / h * 255)
        ];
        rgb2 = [
            Math.round(e.pageX / w * 255),
            150,
            Math.round(e.pageY / h * 255)
        ];
        rgb3 = [
            Math.round(e.pageX / w * 255),
            Math.round(e.pageY / h * 255),
            150
        ];
        rgb4 = [
            125,
            Math.round(e.pageY / h * 255),
            Math.round(e.pageX / w * 255)
        ];
        rgb5 = [
            0,
            Math.round(e.pageY / h * 255),
            Math.round(e.pageX / w * 255)
        ];
        //Changes Color of the Side of Pyramid depending on mouse position
        $('.front').css('border-bottom-color', 'rgb(' + rgb1.join(',') + ')');
        $('.back').css('border-bottom-color', 'rgb(' + rgb2.join(',') + ')');
        $('.left').css('border-bottom-color', 'rgb(' + rgb3.join(',') + ')');
        $('.right').css('border-bottom-color', 'rgb(' + rgb4.join(',') + ')');
        $('.bottom').css('background', 'rgb(' + rgb5.join(',') + ')');

    }).resize();

    //work page hide and show
    // var clickedWork;
    // $(".projects-list li").click(function() {
    //     //therefore clicked work will only apply to this
    //     clickedWork = $(this).attr("class");
    //     $("." + clickedWork + "-text").addClass('reveal');
    //     $(".return-portfolio").fadeIn(500);
    //     $(".projects-list li").fadeOut(200);
    //     $(".pyramid-gyro").hide();
    // })
    // $(".return-portfolio").click(function() {
    //     $("." + clickedWork + "-text").removeClass('reveal');
    //     $(".return-portfolio").fadeOut(500);
    //     $(".projects-list li").fadeIn(200);
    //     $(".pyramid-gyro").fadeIn(200);
    // })

    //hover navigation
    $(".projects-list li, a").hover(function() {
        $(this).css({
            "color": "#F8ECC2",
            "transform": "translateY(-3px)",
            "transition": "200ms ease-in-out"
        })
    }, function() {
        $(this).css({
            "color": "black",
            "transform": "translateY(0)"
        })
    })

    //navigation-bar hover effect
    $(".navigation-bar li").hover(function() {
        $(this).addClass('navigation-hover')
    }, function() {
        $(this).removeClass('navigation-hover')
    })

    //About tab
    $(".navigation-bar li:contains(About)").click(function() {
            $(".box").addClass('navigation-reveal')
            $(".projects-list li").fadeOut(200)
            $('.pyramid-gyro').addClass('pyramid-flip')
            $("." + clickedWork + "-text").removeClass('reveal')
            $(".return-portfolio").fadeOut(500)
            $(".pyramid-gyro").fadeIn(200);
        })
    //Projects tab
    $(".navigation-bar li:contains(Projects)").click(function() {
            $(".box").removeClass('navigation-reveal')
            $(".projects-list li").fadeIn(200)
            $('.pyramid-axis-change').addClass("pyramid-axis").removeClass('pyramid-axis-change')
            $('.pyramid-gyro').removeClass('pyramid-flip',500)
            $("." + clickedWork + "-text").removeClass('reveal')
            $(".return-portfolio").fadeOut(500)
            $(".pyramid-gyro").fadeIn(200);
        })
    //Skills tab
    $(".navigation-bar li:contains(Skills)").click(function() {
        $(this).text("HTML, CSS, PHP, Javascript, jQuery, Gulp, Git ").addClass('skills-bold')
    })

    //Contacts tab
    $(".navigation-bar li:contains(Contact)").click(function() {
        $(this).text("etiotan@gmail.com").addClass('contact-bold')
    })







})
