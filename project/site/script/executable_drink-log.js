/**
 * Settings of drink-log.html
 */
function loadDrinkLogSettings() {
    SETTINGS.path = DRINK_LOG_ELEMENTS.upperSite;
    SETTINGS.userImgPath = DRINK_LOG_ELEMENTS.userImgPath;
}
loadDrinkLogSettings()

/**
 * Opens the menu to set a hydration goal
 */
function openHydrationSetter() {
    fadeIn('hydration-page-overlay', 'block');

    const slider = document.getElementById('hydration-setter');
    slider.style.transform = "translateY(0)";
}

/**
 * Closes the menu to set a hydration goal
 */
function closeHydrationSetter() {
    const slider = document.getElementById('hydration-setter');
    slider.style.transform = "translateY(100%)";
    fadeOut('hydration-page-overlay', 500);
}