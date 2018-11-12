export class CookieBanner extends BaseComponent{
    constructor($el){
        super($el);

        this.config = {
            days: "1",
            cookieName: "cookieAccepted=1",
            cookieBannerClass: ".cookie-banner"
        }

    }

    __PageReady(){
        if(document.cookie.indexOf(this.config.cookieName) ==-1){
            this.$el.show();
            this.$el.find('.cookie-banner__close').on('click', this.createCookie.bind(this));

            if(this.$el.css('top') == "0px") {
                var cookieBannerHeight = this.$el.outerHeight();
                document.body.style.paddingTop = cookieBannerHeight + "px";
                $('.mobile-header').css({'top': cookieBannerHeight + "px"});
                $('.header-container').css({'top': cookieBannerHeight + "px"});
            }
        }
    }

    createCookie() {
        var date = new Date();
        date.setTime(date.getTime()+(this.config.days*24*60*60*1000));
        var expires = '; expires='+date.toGMTString();
        document.cookie = this.config.cookieName+expires+"; path=/";

        document.body.style.paddingTop = "";
        $('.mobile-header').css({'top': ""});
        $('.header-container').css({'top': ""});

        this.$el.hide();
    }
}

if($('.cookie-banner').length) {
    $.each($('.cookie-banner'),function(i,e) {
        new CookieBanner($(e));
    });
}
