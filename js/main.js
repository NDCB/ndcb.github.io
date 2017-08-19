/**
 * The attribute for collapsible elements.
 */
var expanded = "aria-expanded";

//Modules

/**
 * Handles the click event of modules' toggler icon.
 */
$('section.module i.toggler').on('click', function () {
    toggleModuleExpansion($(this));
});

/**
 * Toggles the expansion of the content of a module.
 * @param {jQuery} moduleToggler the toggle icon of the module.
 */
function toggleModuleExpansion(moduleToggler) {
    moduleToggler.toggleClass('rotate');
    var moduleContent = moduleToggler.parent('header').next('article');
    if (moduleContent.attr(expanded) === "false") {
        moduleContent.attr(expanded, "true");
    } else {
        moduleContent.attr(expanded, "false");
    }
}

//Primary navigation

/**
 * The toggler icon for the primary navigation.
 */
var navigationToggler = $('#primary-navigation header i.toggler');

/**
 * The content of the primary navigation.
 */
var navigationContent = navigationToggler.parent().next('ul');

/**
 * Updates the display of the primary navigation's content when the window
 * resizes.
 */
$(window).on('resize', function() {
    updateNavigationDisplay();
});

/**
 * Initial update of the display of the primary navigation's content.
 */
$(updateNavigationDisplay());

/**
 * Updates the display of the primary navigation's content based on the width 
 * of the device.
 */
function updateNavigationDisplay() {
    if (isDesktopWidth()) {
        navigationContent.show();
        navigationContent.attr(expanded, "true");
    } else {
        navigationContent.hide();
        navigationContent.attr(expanded, "false");
    }
}

/**
 * Handles the click event of the primary navigation's toggler icon.
 */
navigationToggler.on('click', function () {
    toggleNavigationExpansion();
});

/**
 * Toggles the expansion of the content of the primary navigation.
 */
function toggleNavigationExpansion() {
    toggleElementAnimated(navigationContent);
    if (navigationContent.attr(expanded) === "false") {
        navigationContent.attr(expanded, "true");
    } else {
        navigationContent.attr(expanded, "false");
    }
}

/**
 * Handles the click event of the navigation elements.
 */
$('#primary-navigation ul li i.toggler').on('click', function () {
    toggleNavigationElementExpansion($(this));
});

/**
 * Toggles the expansion of the content of a navigation element.
 * @param {jQuery} navigationElementToggler the toggle icon of the navigation
 * element.
 */
function toggleNavigationElementExpansion(navigationElementToggler) {
    navigationElementToggler.toggleClass('rotate');
    var navigationElementContent = navigationElementToggler.next('ul');
    toggleElementAnimated(navigationElementContent);
    if (navigationElementContent.attr(expanded) === "false") {
        navigationElementContent.attr(expanded, "true");
    } else {
        navigationElementContent.attr(expanded, "false");
    }
}

//Util

/**
 * Toggles a given element with an animation if the device's scrren is wide 
 * enough.
 * @param {jQuery} element the element to toggle.
 */
function toggleElementAnimated(element) {
    if (isTabletPortraitWidth()) {
        if (element.attr(expanded) === "false") {
            element.slideDown('fast');
        } else {
            element.slideUp('fast');
        }
    } else {
        if (element.attr(expanded) === "false") {
            element.show();
        } else {
            element.hide();
        }
    }
}

/**
 * Returns whether or not the media has the minimum width of the tabvar portrait 
 * breakpoint.
 * @returns {Boolean} if the media has the minimum width of a tablet.
 */
function isTabletPortraitWidth() {
    return $(window).width() >= 768;
}

/**
 * Returns whether or not the media has the minimum width of the desktop 
 * computer breakpoint.
 * @returns {Boolean} if the media has the minimum width of a desktop computer.
 */
function isDesktopWidth() {
    return $(window).width() >= 1200;
}