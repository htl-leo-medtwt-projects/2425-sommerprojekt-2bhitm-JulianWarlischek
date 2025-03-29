/**
 * Dynamic content of calendar.html
 */
function loadDate() {
    const date = new Date()

    const calendar_weekday_inner = document.getElementById('calendar-weekday');
    const day_of_week = date.getDay()

    calendar_weekday_inner.innerHTML = CALENDAR_ELEMENTS.weekday[(day_of_week + 6) % 7];

    const calendar_date_inner = document.getElementById('calendar-date');
    const date_nums = `${date.getDate()}.${date.getMonth() + 1}`

    calendar_date_inner.innerHTML = date_nums;

    const calendar_dayOfMonth_inner = document.getElementById('calendar-dayOfMonth');
    const day_of_month = date.getMonth()

    calendar_dayOfMonth_inner.innerHTML = CALENDAR_ELEMENTS.month[day_of_month];

    const calendar_time_inner = document.getElementById('calendar-time-now');
    const time = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;

    calendar_time_inner.innerHTML = time;

    const calendar_dateTime_inner = document.getElementById('calendar-time-dayTime');
    const dayTime = mapTime(date.getHours());

    calendar_dateTime_inner.innerHTML = dayTime;
}
loadDate()
setInterval(loadDate, 1500)

function loadInputValuesCalendar() {
    const time = new Date();

    const hours = document.getElementById('hours-input');
    const minutes = document.getElementById('minutes-input');

    hours.innerHTML = time.getHours();
    minutes.innerHTML = time.getMinutes();
}
loadInputValuesCalendar()

function loadEventsOfCalendar() {
    document.getElementById('add-session').addEventListener('click', changeCalendarUI)
    document.getElementById('next-input-step').addEventListener('click', nextInputStep)
    SETTINGS.path = CALENDAR_ELEMENTS.upperSite;
}
loadEventsOfCalendar()

function loadCategories() {
    const category_box = document.getElementById('training-categories')

    let temp_string = "";

    temp_string = `
        <div class="category">
            <div class="category-icon">
                ${CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.currentCategory].icon}
            </div>
            <h3>${CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.currentCategory].name}</h3>
        </div>
        `

    category_box.innerHTML = temp_string;
}
loadCategories()

/**
 * Mapping Function
 * 
 * Maps the current time into one out of 3 day times ("Morning", "Noon", "Afternoon", "Evening", "Night")
 */
function mapTime(hour) {
    let value;

    if (hour >= 6 && hour < 12) {
        value = 0;  // 06:00 - 11:59
    } else if (hour >= 12 && hour < 14) {
        value = 1;     // 12:00 - 13:59
    } else if (hour >= 14 && hour < 17) {
        value = 2; // 14:00 - 16:59
    } else if (hour >= 17 && hour < 22) {
        value = 3;   // 17:00 - 21:59
    } else {
        value = 4;     // 22:00 - 05:59
    }

    return CALENDAR_ELEMENTS.day_times[value];
}

/**
 * Changes the UI of the calendar sessions
 */
function changeCalendarUI() {
    CALENDAR_ELEMENTS.state = CALENDAR_ELEMENTS.state === 1 ? -1 : 1;

    const state = CALENDAR_ELEMENTS.state;

    const calendar_section = document.getElementById('trainings-today')
    const headline = document.getElementById('trainings-today-header-headline');
    const close_or_open = document.getElementById('add-session');
    const listed_items = document.getElementById('trainings-today-listed')
    const input_field = document.getElementById('calendar-input-field')

    if (state === 1) {
        headline.innerHTML = 'Todays training sessions';
        close_or_open.style.transform = 'rotate(0deg)'
        listed_items.style.display = 'flex'
        input_field.style.display = 'none';
        calendar_section.style.height = "auto";
        calendar_section.style.transform = "translateY(0)";
        calendar_section.style.backgroundColor = "#fff"
        calendar_section.style.color = "#11161B"
    } else {
        headline.innerHTML = 'Add training session';
        close_or_open.style.transform = 'rotate(45deg)'
        listed_items.style.display = 'none'
        input_field.style.display = 'flex';
        calendar_section.style.height = "70vh";
        calendar_section.style.backgroundColor = "#11161B"
        calendar_section.style.color = "#fff"
    }
}

/**
 * Category input slider
 */
function swipeCategory(dir) {
    if ((dir < 0 && CALENDAR_ELEMENTS.currentCategory <= 0) || (dir > 0 && CALENDAR_ELEMENTS.currentCategory >= CALENDAR_ELEMENTS.types.length - 1)) {
        return
    }
    CALENDAR_ELEMENTS.currentCategory += dir;

    styleSwipeCatButtons()
    loadCategories()
}

/**
 * Styling the swipe buttons if a border has been reached
 */
function styleSwipeCatButtons() {
    CALENDAR_ELEMENTS.swipeLeft.classList.add('valid-button')
    CALENDAR_ELEMENTS.swipeRight.classList.add('valid-button')
    CALENDAR_ELEMENTS.swipeLeft.style.opacity = "1"
    CALENDAR_ELEMENTS.swipeRight.style.opacity = "1"
    if ((CALENDAR_ELEMENTS.currentCategory <= 0)) {
        CALENDAR_ELEMENTS.swipeLeft.style.opacity = "0.5"
        CALENDAR_ELEMENTS.swipeLeft.classList.remove('valid-button')
    } else if ((CALENDAR_ELEMENTS.currentCategory >= CALENDAR_ELEMENTS.types.length - 1)) {
        CALENDAR_ELEMENTS.swipeRight.style.opacity = "0.5";
        CALENDAR_ELEMENTS.swipeRight.classList.remove('valid-button')
    }
}

/**
 * Plus time
 */
function plusTime(mod) {
    let hours = parseInt(document.getElementById('hours-input').innerHTML)
    let minutes = parseInt(document.getElementById('minutes-input').innerHTML)

    if (mod === 24) {
        hours += 1;
        hours %= mod;
    } else {
        minutes += 1;
        minutes %= mod;
    }

    document.getElementById('hours-input').innerHTML = hours
    document.getElementById('minutes-input').innerHTML = minutes;
}
/**
 * Minus time
 */
function minusTime(mod) {
    let hours = parseInt(document.getElementById('hours-input').innerHTML)
    let minutes = parseInt(document.getElementById('minutes-input').innerHTML)

    if (mod === 24) {
        hours -= 1;
    } else {
        minutes -= 1;
    }

    if (hours < 0) {
        hours = mod;
    } else if (minutes < 0) {
        minutes = mod;
    }

    document.getElementById('hours-input').innerHTML = hours
    document.getElementById('minutes-input').innerHTML = minutes;
}

/**
 * Load next input step
 */
function nextInputStep() {
    checkState();
    fadeOut(`calendar-input-${Math.min(CALENDAR_ELEMENTS.currentInput, 1)}`, 500)
    CALENDAR_ELEMENTS.currentInput++;
    if (CALENDAR_ELEMENTS.currentInput === 3) {
        showInputSummary();
        return
    }
    if (CALENDAR_ELEMENTS.currentInput === 4) {
        closeCatInput()
    }
    setTimeout(() => {
        fadeIn(`calendar-input-${Math.min(CALENDAR_ELEMENTS.currentInput, 1)}`, 'flex')
    }, 500)
}

/**
 * Check current input state
 */
function checkState() {
    const hours = parseInt(document.getElementById('hours-input').innerHTML);
    const minutes = parseInt(document.getElementById('minutes-input').innerHTML);

    switch (CALENDAR_ELEMENTS.currentInput) {
        case 0:
            CALENDAR_ELEMENTS.newSession.type = CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.currentCategory];
            break
        case 1:
            CALENDAR_ELEMENTS.newSession.startTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} ${hours > 12 ? 'pm' : 'am'}`;
            document.getElementById('time-headline').innerHTML = 'Select your end time: ';
            break;
        case 2:
            CALENDAR_ELEMENTS.newSession.endTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} ${hours > 12 ? 'pm' : 'am'}`;
            break
    }

    console.log(CALENDAR_ELEMENTS);
}

/**
 * Shows the input values in a summary
 */
function showInputSummary() {
    document.getElementById('next-text-value').innerHTML = 'Finish'

    let start_hours = parseInt(CALENDAR_ELEMENTS.newSession.startTime.substring(0, 2));
    let start_minutes = parseInt(CALENDAR_ELEMENTS.newSession.startTime.substring(3, 5))

    let end_hours = parseInt(CALENDAR_ELEMENTS.newSession.endTime.substring(0, 2));
    let end_minutes = parseInt(CALENDAR_ELEMENTS.newSession.endTime.substring(3, 5));


    document.getElementById('summary').innerHTML = `
                <div class="training-session" style="background-color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type.color].main}; color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type.color].darkMain};">
                    <div class="session-header">
                        <h2>${CALENDAR_ELEMENTS.newSession.type.name}</h2>
                        <div class="unit-icon" style="border:${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type.color].darkMain} 1px solid; color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type.color].darkMain};">
                           ${CALENDAR_ELEMENTS.newSession.type.icon}
                        </div>
                    </div>
                    <div class="time-settings">
                        <div class="start period">
                            <h3 class="time-start-and-end">
                                ${CALENDAR_ELEMENTS.newSession.startTime}
                            </h3>
                            <h4>Start</h4>
                        </div>
                        <div class="duration" style="background-color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type.color].darkMain}; color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type.color].main};">
                            <h5 class="this-duration">${start_hours - end_hours === 0 ? "" : Math.abs(start_hours - end_hours) + " h"} ${start_minutes - end_minutes === 0 ? "" : Math.abs(start_minutes - end_minutes) + " min"}</h5>
                        </div>
                        <div class="end period">
                            <h3 class="time-start-and-end">
                                ${CALENDAR_ELEMENTS.newSession.endTime}
                            </h3>
                            <h4>End</h4>
                        </div>
                    </div>
                </div>
                `

    setTimeout(() => {
        fadeIn('calendar-input-3', 'flex')
    }, 500)
}

/**
 * Closes the input menu
 */
function closeCatInput() {
    document.getElementById('next-input-step').removeEventListener('click', nextInputStep)
    changeCalendarUI()
    document.getElementById('trainings-today-listed').innerHTML += document.getElementById('summary').innerHTML;
    resetCatVariables()
}

/**
 * Resets the variables of the calendar input section
 */
function resetCatVariables() {
    CALENDAR_ELEMENTS.currentCategory = 0;
    CALENDAR_ELEMENTS.currentInput = 0;
    document.getElementById('next-text-value').innerHTML = 'Next'

    let sections = document.getElementsByClassName('calendar-input-element');

    fadeOut(`calendar-input-${sections.length}`)
    fadeOut(`calendar-input-${sections.length - 2}`)
    CALENDAR_ELEMENTS.sessionsToday.push(document.getElementById('summary').innerHTML);
    saveDataOnLS("calendar-items-today", CALENDAR_ELEMENTS.sessionsToday)
    loadInputValuesCalendar()
    fadeIn('calendar-input-0')
    document.getElementById('next-input-step').addEventListener('click', nextInputStep)
    swipeCategory(0);

}

/**
 * Load sessions from LS
 */
function loadSessionsFromLS() {
    let items = JSON.parse(localStorage["calendar-items-today"])
    console.log(items);

    for (let i = 0; i < items.length; i++) {
        document.getElementById('trainings-today-listed').innerHTML += items[i];
    }
}
loadSessionsFromLS()

/**
 * Selects the calendar button and changes the UI
 */
function selectThisCalendar(element) {
    let buttons = document.getElementsByClassName('calendar-select-btn');
    console.log("Function call");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('calendar-select-btn-active');
    }

    element.classList.add('calendar-select-btn-active');
}