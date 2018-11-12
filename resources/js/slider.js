var swiper = new Swiper('.swiper-container', {

    loop: true,
    slidesPerView: 6,
    autoplay: {
        autoplaySpeed: 800
    },
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    autoplaySpeed: 1,
    spaceBetween: 30
});

function stopOnHover() {
    swiper.el.addEventListener("mouseenter", function(event) {
        swiper.autoplay.stop();
    },false);

    swiper.el.addEventListener("mouseleave", function(event) {
        swiper.autoplay.start();
    },false);
};

var swiperWork = new Swiper('.swiper-container-work', {
    slidesPerView: 1.1,
    spaceBetween: 40,
    mousewheel: true,
    freeMode: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    // freeModeSticky: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

stopOnHover();

export {slider}; 