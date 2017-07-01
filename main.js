/**
 * Initial collapse of main navigation elements.
 */
$("document").ready(collapseNavigationElements());

/**
 * Handles the slide animations for list elements of the main navigation.
 */
$('#main-navigation i.toggler').on('click', function(){
    var duration = 'fast';
    if (!window.matchMedia('(min-width: 768px)').matches){
        duration = 0;
    }
    $(this).siblings('ul').slideToggle(duration);
});

/**
 * Toggles the rotation class of carets in the main navigation.
 */
$('#main-navigation i.fa-caret-down').on('click', function(){
    $(this).toggleClass('rotate');
});

/**
 * Collapses the lists within the main navigation whose collapse icon contain the attribute "collapsed". 
 */
function collapseNavigationElements(){
    if (!window.matchMedia('(min-width: 1200px)').matches){
        $('#main-navigation i.fa-navicon').siblings('ul').slideUp(0);
    }
    $('#main-navigation i.fa-caret-down[collapsed]').toggleClass('rotate').siblings('ul').slideUp(0);
}

/**
 * Toggles the display of the main navigation when it switches from desktop to mobile.
 */
$(window).resize(function() {
    console.log("resize call");
    if (!window.matchMedia('(min-width: 1200px)').matches){
        $('#main-navigation i.fa-navicon').siblings('ul').slideUp(0);
    } else {
        $('#main-navigation i.fa-navicon').siblings('ul').slideDown(0);
    }
});