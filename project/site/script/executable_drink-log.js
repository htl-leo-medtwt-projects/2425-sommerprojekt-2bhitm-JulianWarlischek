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
    let tempString = ""

    for (let i = 0; i < DRINK_LOG_ELEMENTS.input_values.length; i++) {
        if (DRINK_LOG_ELEMENTS.input_values[i] === 'delete') {
            tempString += `<div style="color: red;" class="input-field-elem" onclick="inputNumber('${DRINK_LOG_ELEMENTS.input_values[i]}')"><i class="fa-solid fa-delete-left"></i></div>`
        } else if (DRINK_LOG_ELEMENTS.input_values[i] === '.') {
            tempString += `<div class="input-field-elem" onclick="inputNumber('${DRINK_LOG_ELEMENTS.input_values[i]}')"><p>.</p></div>`
        } else {
            tempString += `<div class="input-field-elem" onclick="inputNumber('${DRINK_LOG_ELEMENTS.input_values[i]}')"><p>${DRINK_LOG_ELEMENTS.input_values[i]}</p></div>`
        }
    }
    document.getElementById('hydration-setter-input-grid').innerHTML = tempString;
}
loadInputField()

function inputNumber(input, replace) {
    let currentNumber = document.getElementById('curr-liter').innerHTML;

    if (input === 'delete') {
        document.getElementById('curr-liter').innerHTML = currentNumber.substring(0, currentNumber.length - 1);
    } else if (input === '.') {
        document.getElementById('curr-liter').innerHTML += ".";
    } else {
        let num = parseFloat(input);
        if (replace) {
            document.getElementById('curr-liter').innerHTML = num;
        } else {
            document.getElementById('curr-liter').innerHTML += num;
        }
    }
}