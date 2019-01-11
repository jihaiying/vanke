$(function(){
    fullPages();
    // loading
    var front = document.getElementById("front"),
        loading = document.getElementById("loading"),
        canv = document.getElementById("canvas"),
        img_h = document.getElementById("load_img").height,
        img_y = document.body.clientHeight - img_h,
        ctx = canv.getContext("2d"),
        img = new Image(),
        imgMask = new Image(),
        drawID;
    img.src = "images/loading2.jpg";
    imgMask.src = "images/loading3.png";
    var loading_num = 0;
    function draw() {
        loading_num += 15;
        var maskX = (canv.width - (loading_num)) / 2,
            maskY = (canv.height - (loading_num)) / 1.5;
            // console.log(loading_num)
        ctx.clearRect(0, 0, canv.width, canv.height);
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(imgMask, maskX, maskY, loading_num, loading_num);
        ctx.globalCompositeOperation = "source-in";
        ctx.drawImage(img, 0, img_y, document.body.clientWidth, img_h);
        drawID = window.requestAnimationFrame(draw)
        if(loading_num > 4500){
            // 停止loading之后与banner的衔接
            window.cancelAnimationFrame(drawID);
            $('#loading').fadeOut();
            $('.section1').addClass('ani');
            setTimeout(function(){
                $('.header').addClass('show');
                $('.footer').addClass('show');
            },3000)

        }
    }
    window.onload = function() {
        canv.width = document.body.clientWidth;
        canv.height = document.body.clientHeight;
        // 显示canvas之后开始执行画布的一系列操作
        canv.style.display = "block";
        draw();
    }

    $('.section1 .item').hover(function(){
        $('.section1 .mask').fadeIn();
    }, function(){
        $('.section1 .mask').fadeOut();
    })


    // section3
    var i = 0;
    var timer = setInterval(addNum,10000);
    function addNum(){
        i++;
        if(i>1){
            i=0;
        }
        $('.section3 .bg_block .item').eq(i).addClass('active').siblings().removeClass('active');
        $('.section3 .control .item').eq(i).addClass('active').siblings().removeClass('active');
    }
    $('.section3 .control .item').click(function(){
        clearInterval(timer);
        i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.section3 .bg_block .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
        setTimeout(function(){
            timer = setInterval(addNum,10000);
        },100)
    })

    // section5
    var swiperAutoSlide = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        scrollbarDraggable: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0,
        preventClicks: false,
        scrollbarSnapOnRelease: true,
        noSwiping : true,
        noSwipingClass : 'stop-swiping',
        // mousewheelControl: true,
        speed: 500,
        keyboardControl: true
    });

    // section6
    $(window).load(function(){
        $('#Plaxbox1 img').eq(0).plaxify({
            "xRange":60,
            "yRange":60
        });
        $('#Plaxbox1 img').eq(1).plaxify({
            "xRange":100,
            "yRange":40
        });
        $('#Plaxbox .dot').eq(0).plaxify({
            "xRange":20,
            "yRange":20
        });
        $('#Plaxbox .dot').eq(1).plaxify({
            "xRange":-20,
            "yRange":-20
        });
        $('#Plaxbox .dot').eq(2).plaxify({
            "xRange":-20,
            "yRange":-20
        });
        $('#Plaxbox .dot').eq(3).plaxify({
            "xRange":10,
            "yRange":-20
        });
        $('#Plaxbox .dot').eq(4).plaxify({
            "xRange":-10,
            "yRange":-20
        });
        $('#Plaxbox .dot').eq(5).plaxify({
            "xRange":10,
            "yRange":10
        });
        $('#Plaxbox .dot').eq(6).plaxify({
            "xRange":-15,
            "yRange":-15
        });
        $('#Plaxbox .dot').eq(7).plaxify({
            "xRange":5,
            "yRange":20
        });
        $('#Plaxbox .dot').eq(8).plaxify({
            "xRange":-10,
            "yRange":-20
        });
        $('#Plaxbox .dot').eq(9).plaxify({
            "xRange":20,
            "yRange":10
        });
        $('#Plaxbox .dot').eq(10).plaxify({
            "xRange":20,
            "yRange":-20
        });
        $('#Plaxbox .dot').eq(11).plaxify({
            "xRange":-20,
            "yRange":20
        });
        $.plax.enable();
    })
})
function fullPages(){
    if($(window).width()>992){
        $('#fullpage').fullpage({
            verticalCentered: false,
            normalScrollElements: '.loading',
            navigation: false,
            anchors: ['1', '2', '3', '4', '5', '6', '7'],
            menu: '#menu',
            easing: 'linear',
            // easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
            scrollingSpeed: 500,
            afterLoad: function(anchorLink, index){
                index == 1?$('#menu').fadeOut():$('#menu').fadeIn();
                index == 3?$('#menu').addClass('white'):$('#menu').removeClass('white');
                index == 2 || index == 4 || index == 5 || index == 6?$('.header').addClass('gray'):$('.header').removeClass('gray');
                index == 1 || index == 3?$('.footer').addClass('white'):$('.footer').removeClass('white');
            },
            onLeave: function(index, nextIndex, direction){
            }
        });
        $(document).on('click', '.header .logo a', function(){
            $.fn.fullpage.silentMoveTo('1', 1);
        });
    }
}