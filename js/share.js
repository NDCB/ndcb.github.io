/**
 * Summons a pop-up window.
 * @param {string} url the URL featured in the pop-up.
 * @param {number} width the width of the pop-up window.
 * @param {number} height the height of the pop-up window.
 */
function windowPopup(url, width, height) {
  var left = (screen.width / 2) - (width / 2);
  var top = (screen.height / 2) - (height / 2);
  window.open(
    url,
    "",
    "menubar=no"
    +",toolbar=no"
    +",resizable=yes"
    +",scrollbars=yes"
    +",width=" + width 
    + ",height=" + height 
    + ",top=" + top 
    + ",left=" + left
  );
}

/**
 * Event handler for click events on social share pop-up 
 * anchors.
 */
$("a.social-share-popup").on("click", function(event) {
  event.preventDefault();
  windowPopup($(this).attr("href"), 500, 500);
});