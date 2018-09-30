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

var swiper2 = new Swiper('.swiper-container-2', {

    loop: true,
    slidesPerView: 2,
    autoplay: {
        autoplaySpeed: 800
    },
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    autoplaySpeed: 1,
    spaceBetween: 30
});


stopOnHover();

export {slider}; 