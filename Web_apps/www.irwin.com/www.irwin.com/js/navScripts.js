/* MAIN NAV FADER */
$(function() {
    // set opacity to nill on page load
    $("ul#mainNav span, ul#brandNav span, ul#searchBrandNav span, ul#utcNav span").css("opacity", "0");
    // on mouse over
    $("ul#mainNav span, ul#brandNav span, ul#searchBrandNav span, ul#utcNav span").hover(function() {
            // animate opacity to full
            $(this).stop().animate({
                opacity: 1
            }, 'slow');
        },
        // on mouse out
        function() {
            // animate opacity to nill
            $(this).stop().animate({
                opacity: 0
            }, 'slow');
        });
});

/* MEGA DROP LIST SCRIPT */
//<![CDATA[
$(document).ready(function() {

    function addMega() {
        $($(this).find("h2")).addClass("hover");
        $($(this).find("div.mega-choices")).slideDown("fast");
        $(this).addClass("hovering");
    }

    function removeMega() {
        $($(this).find("h2")).removeClass("hover");
        $($(this).find("div.mega-choices")).slideUp("fast");
        $(this).removeClass("hovering");
    }
    var megaConfig = {
        interval: 100,
        sensitivity: 4,
        over: addMega,
        timeout: 100,
        out: removeMega
    };
    $("li.mega").hoverIntent(megaConfig)
});
//]]>

/* SEARCH FIELDS */
$(document).ready(function() {
    //global vars
    var searchBoxes = $(".text");
    var searchBox2 = $("#search2");
    var searchBox2Default = "Keyword or phrase";
    var zipCode = $(".zipCode");
    var zipDefault = "ZIP Code";


    //Effects for both searchbox
    searchBoxes.focus(function(e) {
        $(this).addClass("active");
    });
    searchBoxes.blur(function(e) {
        $(this).removeClass("active");
    });

    //Searchbox2 show/hide default text if needed
    searchBox2.focus(function() {
        if ($(this).attr("value") == searchBox2Default) $(this).attr("value", "");
    });
    searchBox2.blur(function() {
        if ($(this).attr("value") == "") $(this).attr("value", searchBox2Default);
    });
    //Searchbox2 show/hide default text if needed
    zipCode.focus(function() {
        if ($(this).attr("value") == zipDefault) $(this).attr("value", "");
    });
    zipCode.blur(function() {
        if ($(this).attr("value") == "") $(this).attr("value", zipDefault);
    });
});