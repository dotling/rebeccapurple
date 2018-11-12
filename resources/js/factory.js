export class BaseComponent{

    constructor($el){
        this.$el=$el;
        this.config = {};
        setTimeout(this.mergeConfigWithDataAttributes.bind(this));
        $(document).ready(() => this.__PageReady());
    }

    mergeConfigWithDataAttributes(){

        $.extend(this.config, this.$el.data());
        $.each(this.$el.data(), (name, value) => {
            //this.$el.removeAttr("data-" + name);
        });
    }

    __PageReady(){}

}