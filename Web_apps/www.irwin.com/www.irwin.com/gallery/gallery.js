// JavaScript Document

$(window).load(function() {
    $('.galBut').click(function() {
        var slideNum = $(this).text() - 1; //change slide number to 0 base for cycle and convert to int
        $('#galSlides').cycle(slideNum);
    });
});

$.ajax({
    url: 'xml/home-gallery.ashx',
    type: 'POST',
    dataType: "xml",
    data: {},
    success: function(data) {
        var count = 1;
        $(data).find('ITEM').each(function() {
            var galleryImage = $(this).find('IMAGE').text();
            var galleryTitle = $(this).find('TITLE').text();
            var galleryLink = $(this).find('LINK').text();
            $('#galSlides').append('<a href="' + galleryLink + '"><img src="/uploads/home-page/gallery/' + galleryImage + '" /></a>');
            $('#galNavBut').append('<span class="galBut" id="galBut' + count + '">' + count + '</span>');
            count++;
        });
        $('#galSlides img:first').fadeIn(1500, function() {
            $("#galSlides").cycle({
                fx: 'fade',
                speed: 500,
                timeout: 5000,
                after: onAfter
            });
        });
    }
});

function onAfter(curr, next, opts) {
    resetButtons();
    $('#galBut' + (opts.currSlide + 1)).css({
        'background-position': 'top',
        'color': '#fff'
    });
}

function resetButtons() {
    $('.galBut').css({
        'background-position': 'bottom',
        'color': '#000'
    });
}