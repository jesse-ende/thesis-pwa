jQuery(document).ready(function($) {

    jQuery('.video-cover .col-md-3:nth-child(4n+0)').after('<div class="clear"></div>');

    var owl = jQuery("#fvideos");

    owl.owlCarousel({

        itemsCustom: [
            [0, 1],
            [480, 2],
            [980, 3]
        ]

    });

    if ($('.frame-lessons-list').length > 0) {
        jQuery('.frame-lessons-list .scroller').nanoScroller({});

    }

    $('.head-boxes .box').viewportChecker({
        classToAdd: 'active'
    });

    $('#site-navigation .menumobiletoggle').click(function() {
        $('#sitemenu').parents('.main-menu-grid').toggleClass('showup');
    });

    $('#sitemenu li.menu-item-has-children').click(function() {
        $(this).find('> ul').slideToggle(400);
        return false;
    });

    $('#sitemenu li.menu-item-has-children li a').click(function(ee) {
        ee.stopPropagation();
    });

});