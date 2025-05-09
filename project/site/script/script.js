/**
 * Settings of index.html
 */
function loadIndex() {
    SETTINGS.path = INDEX_ELEMENTS.path;
    SETTINGS.userImgPath = INDEX_ELEMENTS.userImgPath;
    let update1 = updateChart()
    let update2 = updateSessionsDone();
    let update3 = updateCaloriesBurned()
    let update4 = updateHydration();

    if (update1 || update2 || update3) {
        update()
    }
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
 * Function to filter a number out of a string
 */
function getInteger(int_string) {
    const nums = int_string.match(/\d+/);

    return nums[0];
}

/**
 * Generates a random value
 */
function getRandom(max, min) {
    return Math.floor(Math.random() * max) + min;
}