(function ($) {
    $.fakeLoader = function(options) {

        var settings = $.extend({
            targetClass:'fakeLoader',
            timeToHide:1200,               
            bgColor: '#2ecc71', 
            spinner:'spinner2'
        }, options);

        var spinner = '<div class="fl fl-spinner spinner"><div class="ball1"></div><div class="ball2"></div></div>';
        var el = $('body').find('.' + settings.targetClass);

        el.each(function() {
            var a = settings.spinner;
            
                switch (a) {
                    case 'spinner':
                            el.html(spinner);
                        break;
                    }
        });

        el.css({
            'backgroundColor':settings.bgColor
        });

        setTimeout(function () {
            $(el).fadeOut();
        }, settings.timeToHide);
    }; 
}(jQuery));
