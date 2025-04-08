/**
 * Settings of index.html
 */
function loadIndex() {
    SETTINGS.path = INDEX_ELEMENTS.path;
    SETTINGS.userImgPath = INDEX_ELEMENTS.userImgPath;
}
loadIndex()

/**
 * 
 * @param {string} elementId ID of the element
 * @param {number} millis Duration of the fade out (CHECK THE TRANSITION!!!)
 */
function fadeOut(elementId, millis) {
    let element = document.getElementById(elementId)

    element.style.opacity = "0";

    setTimeout(() => {
        element.style.display = "none";
    }, millis)
}

/**
 * 
 * @param {string} elementId ID of the element
 * @param {string} display How the box design should work after the fade in 
 */
function fadeIn(elementId, display) {
    let element = document.getElementById(elementId)
    element.style.display = display || "block";

    setTimeout(() => {
        element.style.opacity = "1";
    }, 20)
}

/**
 * Function to create a copy of an object to avoid reference problems 
 * @param {Object} o Object to copy 
 */
function getCopyOf(o) {
    return JSON.parse(JSON.stringify(o));
}