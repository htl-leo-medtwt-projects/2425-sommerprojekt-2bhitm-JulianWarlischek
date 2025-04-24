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

/**
 * Load numbers to input
 */
function loadInputField() {
    let counter = 0;
    let inputFieldCounter = 0;
    let tempString = ""

    while (true) {
        if (inputFieldCounter == 12) {
            tempString += `<div class="input-field-elem"><i class="fa-solid fa-delete-left"></i></div>`
        }else if(inputFieldCounter == 10){
            tempString += `<div class="input-field-elem"><p>.</p></div>`
        } else if(inputFieldCounter != 0) {
            tempString += `<div class="input-field-elem"><p>${counter}</p></div>`
            counter--
        }
        inputFieldCounter++;
        if(counter == 9){
            counter = 0;
        }
        if(inputFieldCounter != 0 && counter == 0){
            break
        }
    }

    document.getElementById('hydration-setter-input-grid').innerHTML = tempString;


}
loadInputField()