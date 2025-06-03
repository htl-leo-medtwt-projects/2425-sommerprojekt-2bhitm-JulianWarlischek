/**
 * Settings of drink-log.html
 */
function loadDrinkLogSettings() {
    SETTINGS.path = DRINK_LOG_ELEMENTS.upperSite;
    SETTINGS.userImgPath = DRINK_LOG_ELEMENTS.userImgPath;
    document.getElementById('curr-liter-goal').value = DRINK_LOG_ELEMENTS.goal == 0 ? "" : DRINK_LOG_ELEMENTS.goal;
    changeHydrationReachedUI()
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

    if (currentNumber === "0") {
        document.getElementById('curr-liter').innerHTML = "";
    }

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

/**
 * Saves the hydration goal to LS
 */
function saveHydrationGoal() {
    let value = document.getElementById('curr-liter-goal').value;

    document.getElementById('liter').style.color = 'white'


    if (isNaN(value) || parseFloat(value) < 0 || parseFloat(value) > 100 || value == "") {
        value = 0;
        document.getElementById('curr-liter-goal').value = "";
        document.getElementById('curr-liter-goal').placeholder = value;
        document.getElementById('liter').style.color = 'rgb(155, 155, 155)';
    }

    DRINK_LOG_ELEMENTS.goal = parseFloat(value);
    changeHydrationReachedUI()
    throwSuccess('Hydration goal set');
    saveDataOnLS('hydration-goal', parseFloat(value));
}

function addHydrationReached() {
    let value = document.getElementById('curr-liter').innerHTML;

    console.log(document.getElementById('curr-liter').innerHTML);

    if (isNaN(value) || parseFloat(value) > 100) {
        value = 0;
    }

    document.getElementById('curr-liter').innerHTML = "0";

    DRINK_LOG_ELEMENTS.reached += parseFloat(value);
    saveDataOnLS('hydration-reached', DRINK_LOG_ELEMENTS.reached)
    changeHydrationReachedUI()
}

function changeHydrationReachedUI() {
    let html = document.getElementById('curr-liter-reached');

    html.innerHTML = DRINK_LOG_ELEMENTS.reached

    let result = 100;
    
    if(DRINK_LOG_ELEMENTS.goal < DRINK_LOG_ELEMENTS.reached){
        result = 0;
    }else if (DRINK_LOG_ELEMENTS.goal != 0) {
        result = 100 - (DRINK_LOG_ELEMENTS.reached / DRINK_LOG_ELEMENTS.goal) * 100
    } 
    
    console.log(result);

    document.getElementById('wave-holder').style.transform = `translateY(${result + 5}%)`
}