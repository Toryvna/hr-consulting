$(document).ready(function(){
     
    // toggle mobile menu
    $(document).mouseup(function(e){
        $('.toggle-menu').on('click', function () {
            $('#mainMenu').toggleClass('show');
            $(this).toggleClass('active');
        });
        var menu = $('#mainMenu.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
            $('.toggle-menu').removeClass('active');
            $('.has-sub.open').removeClass('open');
        }
    });
    //end toggle mobile menu

    $('#mainMenu li.has-sub>a').after('<span class="arrow"><i class="icon-icon7"></i></span>');

    if (window.innerWidth < 1024){
        $('#mainMenu li.has-sub>a').on('click', function(){
            $(this).parent().parent().find('.open').removeClass('open');
            $(this).parent().toggleClass('open');
        })
    }

    //show call block
    $(document).mouseup(function(e){
        $('.fixedBtn').on('click', function(){
            $('.fixedBtn-body').toggleClass('show');
        });
        $('.fixedBtn-body .closeBtn').on('click', function(){
            $('.fixedBtn-body').removeClass('show');
        });
        var fixedEl = $('.fixedBtn-body');
        if (!fixedEl.is(e.target) && fixedEl.has(e.target).length === 0) {
            fixedEl.removeClass('show');
        }
    });

    //Scroll to Top
    $('.scrollTop').click(function() {      
        $('body,html').animate({
            scrollTop : 0                       
        }, 500);
    });

    //show search
    $(document).mouseup(function(e){
        $('.showSearch').on('click', function(){
            $('#form-input').addClass('show');
        });
        var fixedEl = $('#form-input');
        if (!fixedEl.is(e.target) && fixedEl.has(e.target).length === 0) {
            fixedEl.removeClass('show');
        }
    });

    //popup
    $('.open-email__popup').on("click",function(){
        $('.overlayPopup').addClass('active');
    });
    $('.overlayPopup .closeBtn, .overlayPopup .close').on("click",function(){
        $('.overlayPopup').removeClass('active');
    });
});


