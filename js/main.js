/**
 * Collapses the elements of the navigation.
 */
$(window).ready(function() {
    $('#primary-navigation ul[aria-expanded="false"]').hide();
    if (!isDesktopWidth()) {
        $('#primary-navigation header i.toggler').parent().next('ul').hide();
    }
});

/**
 * Collapses the modules.
 */
$(window).ready(function() {
    var $moduleSection = $('section.module[aria-expanded="false"]');
    var $moduleContent = $moduleSection.children('article');
    toggleModule($moduleContent);
});

/**
 * Updates the appearance of the primary navigation when the window resizes.
 */
$(window).resize(function () {
    let $navigationContent  = $('#primary-navigation header i.toggler')
    .parent().next('ul');
    var expanded = "aria-expanded";
    if (isDesktopWidth()) {
        $navigationContent.show();
        $navigationContent.attr(expanded, "true");
    } else {
        $navigationContent.hide();
        $navigationContent.attr(expanded, "false");
    }
});

/**
 * Handles the click event of modules' toggler icon.
 */
$('section.module i.toggler').on('click', function(event) {
    toggleModuleExpansion($(this));
});

/**
 * Toggles the expansion of the content of a module.
 * @param {$element} $moduleToggler the toggle icon of the module.
 */
function toggleModuleExpansion($moduleToggler) {
    var expanded = "aria-expanded";
    $moduleToggler.toggleClass('rotate');
    var $moduleHeader = $moduleToggler.parent('header');
    var $moduleSection = $moduleHeader.parent('section');
    if ($moduleSection.attr(expanded) === "false") {
        $moduleSection.attr(expanded, "true");
    } else {
        $moduleSection.attr(expanded, "false");
    }
    var $moduleContent = $moduleHeader.next('article');
    toggleModule($moduleContent);
}

/**
 * Toggles the content of a module.
 * @param {$element} $moduleContent the content of the module to toggle.
 */
function toggleModule($moduleContent) {
    $moduleContent.toggle();
}

/**
 * Handles the click event of the burger icon.
 */
$('#primary-navigation header i.toggler').on('click', function(event) {
    toggleNavigationExpansion($(this));
});

/**
 * Toggles the expansion of the content of the primary navigation.
 * @param {$element} $navigationToggler the burger icon element.
 */
function toggleNavigationExpansion($navigationToggler) {
    let $navigationContent = $navigationToggler.parent().next('ul');
    var expanded = "aria-expanded";
    if ($navigationContent.attr(expanded) === "false") {
        $navigationContent.attr(expanded, "true");
    } else {
        $navigationContent.attr(expanded, "false");
    }
    toggleNavigation($navigationContent);
}

/**
 * Toggles the content of the primary navigation.
 * @param {$element} $navigationContent the content of the navigation to toggle.
 */

function toggleNavigation($navigationContent) {
    if (isTabletPortraitWidth()) {
        $navigationContent.slideToggle('fast');
    } else {
        $navigationContent.toggle();
    }
}

/**
 * Handles the click event of the navigation elements.
 */
$('#primary-navigation ul li i.toggler').on('click', function(event) {
    toggleNavigationElementExpansion($(this));
});

/**
 * Toggles the expansion of the content of a navigation element.
 * @param {$element} $navigationElementToggler the toggle icon of the navigation
 * element.
 */
function toggleNavigationElementExpansion($navigationElementToggler) {
    var expanded = "aria-expanded";
    $navigationElementToggler.toggleClass('rotate');
    let $navigationElementContent = $navigationElementToggler.next('ul');
    if ($navigationElementContent.attr(expanded) === "false") {
        $navigationElementContent.attr(expanded, "true");
    } else {
        $navigationElementContent.attr(expanded, "false");
    }
    toggleNavigationElement($navigationElementContent);
}

/**
 * Toggles the content of a navigation element.
 * @param {$element} $navigationElementContent the content of the navigation 
 * element.
 */
function toggleNavigationElement($navigationElementContent) {
    if (isTabletPortraitWidth()) {
        $navigationElementContent.slideToggle('fast');
    } else {
        $navigationElementContent.toggle();
    }
}

/**
 * Returns whether or not the media has the minimum width of the tablet portrait 
 * breakpoint.
 * @returns {Boolean} if the media has the minimum width of a tablet.
 */
function isTabletPortraitWidth() {
    return window.matchMedia('(min-width: 768px)').matches;
}

/**
 * Returns whether or not the media has the minimum width of the desktop 
 * computer breakpoint.
 * @returns {Boolean} if the media has the minimum width of a desktop computer.
 */
function isDesktopWidth() {
    return window.matchMedia('(min-width: 1200px)').matches;
}