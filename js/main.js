/**
 * Initial collapse of main navigation elements.
 */
$(window).ready(collapseNavigationElements(), collapseModules());

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
 * Collapses the lists within the main navigation whose toggle icon contains the attribute "collapsed". 
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
 * Collapses modules with the attribute collapsed.
 */
function collapseModules() {
    if ($('section.module[collapsed] article').length){
        console.log("exists...")
    }
    $('section.module[collapsed] article').slideUp(0);
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

/**
 * Scrolls smoothly between id anchors on a same document.
 * By: Chris Coyier
 * Src: https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
$('a[href*="#"]')
    .not('[href="#"]')
    .not('.headline-link')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 2000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
