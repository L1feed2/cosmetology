$('.mainBanner__slider').slick({
    arrows: true,
    dots: true,
    appendArrows: $('.mainBanner__arrows'),
    appendDots: $('.mainBanner__dots'),
    prevArrow: '<div class="prev arrow"><span class="icon-chevron"></span></div>',
    nextArrow: '<div class="next arrow"><span class="icon-chevron"></span></div>',
    fade: true,
});


$('.services__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true
    prevArrow: '<div class="prev arrow services__arrow"><span class="icon-chevron"></span></div>',
    nextArrow: '<div class="next arrow services__arrow"><span class="icon-chevron"></span></div>',
    responsive: [{
            breakpoint: 1430,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 1,
                fade: true
            }
        },
    ]

});



$('.discount__row').slick({
    appendArrows: $('.discount__arrows'),
    prevArrow: '<div class="prev arrow discount__arrow"><span class="icon-chevron"></span></div>',
    nextArrow: '<div class="next arrow discount__arrow"><span class="icon-chevron"></span></div>',
    slidesToShow: 3,
    responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});






window.addEventListener("resize", function () {

    sliderIsLive = false;

    if (window.innerWidth <= 940) {
        $('.gallery__grid').slick({
            appendArrows: $('.gallery__arrows'),
            prevArrow: '<div class="prev arrow discount__arrow"><span class="icon-chevron"></span></div>',
            nextArrow: '<div class="next arrow discount__arrow"><span class="icon-chevron"></span></div>',
            fade: true
        });

        $('.gallery__grid--big').slick('unslick');
        sliderIsLive = true;
    } else {
        if (sliderIsLive) {
            $('.your-slider').slick("unslick");
            sliderIsLive = false;
        }
    }
});



// feedback image resizing
img = $('.feedback__img img');
w = $('.feedback__img img').css('width');
h = $('.feedback__img img').css('height');

if(w > h){
    img.css('height' , '100%');
    img.css('width' , 'auto');
} else if (h > w) {
    img.css('height' , 'auto');
    img.css('width' , '100%');
} else {
    img.css('height' , 'auto');
    img.css('width' , '100%');
}



$('.feedback__slider').slick({
    dots: true,
    appendDots: $('.feedback__dots'),
    arrows: true,
    prevArrow: '<div class="prev arrow feedback__arrow"><span class="icon-chevron"></span></div>',
    nextArrow: '<div class="next arrow feedback__arrow"><span class="icon-chevron"></span></div>',
    responsive: [
        {
            breakpoint: 728,
            settings: {
                appendArrows: $('.feedback__arrows'),
                dots: false
            }
        }
    ]
})


$('.lang__switcher').click(function(){
    $('.lang__dropdown').toggleClass('show')
})


$('.header__toggler').click(function(){
    $('.header__drop').toggleClass('header__open');
    $(this).toggleClass('header__toggler--active')
})




function popupOpen1(){
    $('.popups').fadeIn();
    
    $('.consultation').fadeIn();

    h = $('.popups').height();

    $('.wrapper').css('height', h).addClass('overflow');

    

    $('.popup__close').click(function(){
        $('.consultation').fadeOut();
        $('.entry').fadeOut();
        $('.popups').fadeOut();
        
        $('.wrapper').removeClass('overflow');
    })

}

function popupOpen2(){

    

    $('.popups').fadeIn();
    $('.entry').fadeIn();

    h = $('.popups').height();

    $('.wrapper').css('height', h).addClass('overflow');

    $('.wrapper').addClass('overflow');
    $('.popup__close').click(function(){
        $('.consultation').fadeOut();
        $('.entry').fadeOut();
        $('.popups').fadeOut();
        
        $('.wrapper').removeClass('overflow');
    })

}






// Select
$('.select').each(function(){
    // Variables
    var $this = $(this),
        selectOption = $this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        dur = 300;

    $this.hide();
    // Wrap all in select box
    $this.wrap('<div class="select"></div>');
    // Style box
    $('<div>',{
        class: 'select__gap',
        text: 'Уход за кожей'
    }).insertAfter($this);

    $('<span>',{
        class: 'icon-chevron',
    }).appendTo('.select');
    
    var selectGap = $this.next('.select__gap'),
        caret = selectGap.find('.caret');
    // Add ul list
    $('<ul>',{
        class: 'tabs__caption'
    }).insertAfter(selectGap);		

    var selectList = selectGap.next('.tabs__caption');
    // Add li - option items
    for(var i = 0; i < selectOptionLength; i++){
        $('<li>',{
            class: 'select__item',
            html: $('<span>',{
                text: selectOption.eq(i).text(),
            }),
            
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
    // Find all items
    var selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectGap.on('click', function(){
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            selectList.slideDown(dur);

            selectItem.on('click', function(){
                var chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectGap.text($(this).find('span').text());
                selectList.slideUp(dur);
                selectGap.removeClass('on');
            });
            
        } else {
            $(this).removeClass('on');
            selectList.slideUp(dur);
        }
    });		

});







// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});





$('.up-arrow').click(function(){
    $("body,html").animate({ scrollTop:0 }, 800); return false;
})


$('img').loadScroll(500);