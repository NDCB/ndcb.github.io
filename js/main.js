/**
 * Initial collapse of main navigation elements.
 */
$(window).ready(collapseNavigationElements());

/**
 * Handles the slide animations for the collapsible main navigation menu.
 */
$('#main-navigation header i.toggler').on('click', function () {
    var duration = 'fast';
    if (!window.matchMedia('(min-width: 768px)').matches) {
        duration = 0;
    }
    $(this).parent().siblings('ul').slideToggle(duration);
});

/**
 * Handles the slide animations for collapsible list elements of the main navigation.
 */
$('#main-navigation i.toggler').on('click', function () {
    var duration = 'fast';
    if (!window.matchMedia('(min-width: 768px)').matches) {
        duration = 0;
    }
    $(this).siblings('ul').slideToggle(duration);
});

/**
 * Handles the rotation of carets of collapsible list elements in the main navigation.
 */
$('#main-navigation ul i.toggler').on('click', function () {
    $(this).toggleClass('rotate');
});

/**
 * Handles the rotation of carets of collapsible elements in the main component of the page.
 */
$('main i.toggler').on('click', function () {
    $(this).toggleClass('rotate');
});

/**
 * Handles the slide animation of collapsible elements of the main component of the page.
 */
$('main i.toggler').on('click', function () {
    var duration = 'fast';
    if (!window.matchMedia('(min-width: 768px)').matches) {
        duration = 0;
    }
    $(this).parent().siblings('article').slideToggle(duration);
});

/**
 * Collapses the lists within the main navigation whose collapse icon contains the attribute "collapsed". 
 */
function collapseNavigationElements() {
    if (!window.matchMedia('(min-width: 1200px)').matches) {
        $('#main-navigation i.fa-navicon').parent().siblings('ul').slideUp(0);
    }
    $('#main-navigation i.fa-caret-down').addClass('rotate');
    $('#main-navigation i.fa-caret-down[collapsed]').toggleClass('rotate').siblings('ul').slideUp(0);
    $('main i.fa-caret-up[collapsed]').toggleClass('rotate').parent().siblings('article').slideUp(0);
}

/**
 * Toggles the display of the main navigation when it switches from desktop to mobile.
 */
$(window).resize(function () {
    if (!window.matchMedia('(min-width: 1200px)').matches) {
        $('#main-navigation i.fa-navicon').parent().siblings('ul').slideUp(0);
    } else {
        $('#main-navigation i.fa-navicon').parent().siblings('ul').slideDown(0);
    }
});

/*
var options = {
    color: '#e67e22',
    generator: "hexagons"
}
var pattern = GeoPattern.generate('Computer Science', options);
$('h1').css('background-image', pattern.toDataUrl());
console.log(pattern.toDataUrl());
*/