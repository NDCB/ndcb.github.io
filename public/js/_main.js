/**
 * The attribute for collapsible elements.
 */
const EXPANDED = 'aria-expanded';

/**
 * Toggles the display of a given DOM element.
 * @param {Node} element the element to expand or hide.
 */
function toggleExpansion(element) {
    element.setAttribute(EXPANDED,
        element.getAttribute(EXPANDED) === 'true' ? false : true);
}

/**
 * Summons a pop-up window.
 * @param {string} url the URL displayed in the pop-up window.
 * @param {number} width the width of the pop-up window.
 * @param {number} height the height of the pop-up window.
 */
function windowPopup(url, width, height) {
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    window.open(
        url,
        '',
        'menubar=no'
        +',toolbar=no'
        +',resizable=yes'
        +',scrollbars=yes'
        +',width=' + width
        + ',height=' + height
        + ',top=' + top
        + ',left=' + left
    );
}

/**
 * Adds a click event to selected DOM elements.
 * @param {String} selector the CSS selector of DOM elements.
 * @param {Function} action the function to execute on click.
 */
function clickEvent(selector, action) {
    [].forEach.call(document.querySelectorAll(selector), function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            action(element);
        });
    });
};

/**
 * Handles the rotation of toggler elements.
 */
clickEvent('.toggler', function(element) {
    element.classList.toggle('rotate');
});

/**
 * Handles the display of the navigation subcategories.
 */
clickEvent('#navigation nav .toggler', function(element) {
    toggleExpansion(element.nextSibling);
});

/**
 * Handles the display of the navigation.
 */
clickEvent('.burger', function(element) {
    element.classList.toggle('fa-navicon');
    element.classList.toggle('fa-close');
    toggleExpansion(element.parentNode.nextSibling);
});

/**
 * Handles the display of pop-up windows for share buttons.
 */
clickEvent('.share', function(element) {
    windowPopup(element.getAttribute('href'), 500, 500);
});

/**
 * Handles the display of module contents.
 */
clickEvent('.module .toggler', function(element) {
    toggleExpansion(element.parentNode.nextSibling);
});
