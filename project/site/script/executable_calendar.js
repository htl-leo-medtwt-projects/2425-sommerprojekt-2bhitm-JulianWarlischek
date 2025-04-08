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

/**
 * Loads months
 */
function loadMonths() {

    const date = new Date();

    const monthBefore = document.getElementById('month-before-label');
    const monthNow = document.getElementById('month-now-label');
    const monthAfter = document.getElementById('month-after-label');

    fadeOut('month-before-label', 500);
    fadeOut('month-now-label', 500);
    fadeOut('month-after-label', 500);


    setTimeout(() => {
        monthBefore.innerHTML = `${CALENDAR_ELEMENTS.month[(CALENDAR_ELEMENTS.currentMonth - 1 + CALENDAR_ELEMENTS.month.length) % CALENDAR_ELEMENTS.month.length]}`;
        monthNow.innerHTML = `${CALENDAR_ELEMENTS.month[CALENDAR_ELEMENTS.currentMonth]}`;
        monthAfter.innerHTML = `${CALENDAR_ELEMENTS.month[(CALENDAR_ELEMENTS.currentMonth + 1) % CALENDAR_ELEMENTS.month.length]}`;

        fadeIn('month-before-label');
        fadeIn('month-now-label');
        fadeIn('month-after-label');
    }, 500)
}
loadMonths()

function loadInputValuesCalendar() {
    const time = new Date(); const hours = document.getElementById('hours-input');
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
    if (CALENDAR_ELEMENTS.state != -1) {
        CALENDAR_ELEMENTS.prevState = CALENDAR_ELEMENTS.state;
    }

    resetCalInput()
    /*
    State switch:

    STATE = 1, 0 -> -1;
    STATE = -1 -> 0,1 (prevSate ????);  
    */
    CALENDAR_ELEMENTS.state = CALENDAR_ELEMENTS.state === 1 || CALENDAR_ELEMENTS.state === 0 ? -1 : CALENDAR_ELEMENTS.prevState === 1 ? 1 : 0;

    const state = CALENDAR_ELEMENTS.state;

    const calendar_section = document.getElementById('training-sessions-flex')
    const headline = document.getElementById('trainings-today-header-headline');
    const close_or_open = document.getElementById('add-session');
    const listed_items = document.getElementById('trainings-today')
    const input_field = document.getElementById('calendar-input-field')
    const calendar_flex = document.getElementById('trainings-calendar');

    if (state === 1 || state === 0) {
        changeCalendarContentUI(state);
        resetCalInput();
        resetCatVariables()
    } else {
        headline.innerHTML = 'Add training session';
        listed_items.style.display = 'none'
        input_field.style.display = 'flex';
        calendar_section.style.background = getComputedStyle(document.documentElement).getPropertyValue('--calendar-input-bg');
        calendar_section.style.color = "#fff"
        close_or_open.style.position = "static"
        calendar_flex.style.display = "none";
        slideUp()
    }
}

/**
 * Resets the input field to the default
 */
function resetCalInput() {
    const calendar_section = document.getElementById('training-sessions-flex')
    const listed_items = document.getElementById('training-sessions')
    const input_field = document.getElementById('calendar-input-field')

    calendar_section.style.background = "#fff"
    listed_items.style.display = 'flex'
    input_field.style.display = 'none';
    calendar_section.style.color = "#11161B"
}

/**
 * Changes headlines and contents on the page
 */
function changeCalendarContentUI(state) {
    const headline = document.getElementById('trainings-today-header-headline');
    const close_or_open = document.getElementById('add-session');
    const listed_items = document.getElementById('trainings-today')
    const calendar_flex = document.getElementById('trainings-calendar');

    if (state == 1) {
        headline.innerHTML = 'Todays training sessions';
        close_or_open.style.position = 'static';
        listed_items.style.display = "flex";
        calendar_flex.style.display = "none";
        slideDown();
    } else {
        listed_items.style.display = "none";
        close_or_open.style.position = 'absolute';
        close_or_open.style.left = "50%";
        close_or_open.style.top = "2%";
        close_or_open.style.transform = "translateX(-50%)"
        headline.innerHTML = '';
        calendar_flex.style.display = "flex";
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

    if (mod === 23) {
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
    fadeOut(`calendar-input-${CALENDAR_ELEMENTS.currentInput < 3 ? Math.min(CALENDAR_ELEMENTS.currentInput, 1) : CALENDAR_ELEMENTS.currentInput}`, 500)
    console.log("Fade out: " + (`calendar-input-${CALENDAR_ELEMENTS.currentInput < 3 ? Math.min(CALENDAR_ELEMENTS.currentInput, 1) : CALENDAR_ELEMENTS.currentInput}`));

    CALENDAR_ELEMENTS.currentInput++;
    if (CALENDAR_ELEMENTS.currentInput === 4) {
        safeVariables()
        showInputSummary();
        return
    }
    if (CALENDAR_ELEMENTS.currentInput === 5) {
        closeCatInput()
        return
    }

    setTimeout(() => {
        fadeIn(`calendar-input-${CALENDAR_ELEMENTS.currentInput < 3 ? Math.min(CALENDAR_ELEMENTS.currentInput, 1) : CALENDAR_ELEMENTS.currentInput}`, 'flex')
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
            break;
        case 1:
            CALENDAR_ELEMENTS.newSession.startTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} ${hours > 12 ? 'pm' : 'am'}`;
            setTimeout(() => {
                document.getElementById('time-headline').innerHTML = 'Select your end time: ';
            }, 500)
            break;
        case 2:
            CALENDAR_ELEMENTS.newSession.endTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} ${hours > 12 ? 'pm' : 'am'}`;
            break;
    }

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
                <div class="training-session" style="background-color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type].main}; color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type].darkMain};">
                    <div class="session-header">
                        <h2>${CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.newSession.type].name}</h2>
                        <div class="unit-icon" style="border:${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type].darkMain} 1px solid; color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type].darkMain};">
                           ${CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.newSession.type].icon}
                        </div>
                    </div>
                    <div class="time-settings">
                        <div class="start period">
                            <h3 class="time-start-and-end">
                                ${CALENDAR_ELEMENTS.newSession.startTime}
                            </h3>
                            <h4>Start</h4>
                        </div>
                        <div class="duration" style="background-color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type].darkMain}; color: ${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.newSession.type].main};">
                            <h5 class="this-duration">${CALENDAR_ELEMENTS.newSession.duration / 60 + " h " + CALENDAR_ELEMENTS.newSession.duration % 60 + " min"}</h5>
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
        fadeIn('calendar-input-4', 'flex')
    }, 500)
}

/**
 * Closes the input menu
 */
function closeCatInput() {
    document.getElementById('next-input-step').removeEventListener('click', nextInputStep)
    console.log(CALENDAR_ELEMENTS.newSession);
    changeCalendarUI()
    document.getElementById('trainings-today-listed').innerHTML += document.getElementById('summary').innerHTML;
    resetCatVariables()
    resetCalInput()
}

/**
 * Safes Variables
 */
function safeVariables() {
    const date = new Date();
    //Initialize newSession
    CALENDAR_ELEMENTS.newSession.type = CALENDAR_ELEMENTS.currentCategory;
    CALENDAR_ELEMENTS.newSession.date.month = parseInt(document.getElementById('month-num').value);
    CALENDAR_ELEMENTS.newSession.date.dayOfMonth = parseInt(document.getElementById('num-of-month').value);
    CALENDAR_ELEMENTS.newSession.duration = calcDuration(parseInt(CALENDAR_ELEMENTS.newSession.startTime.substring(0, 2)), parseInt(CALENDAR_ELEMENTS.newSession.endTime.substring(0, 2)), parseInt(CALENDAR_ELEMENTS.newSession.startTime.substring(3, 5)), parseInt(CALENDAR_ELEMENTS.newSession.endTime.substring(3, 5)));


    //Safe the new session in the "todays" list
    if (CALENDAR_ELEMENTS.newSession.date.month === date.getMonth() + 1 && CALENDAR_ELEMENTS.newSession.date.dayOfMonth === date.getDate()) {
        CALENDAR_ELEMENTS.sessionsToday.push(CALENDAR_ELEMENTS.newSession);
        saveDataOnLS("calendar-items-today", CALENDAR_ELEMENTS.sessionsToday)
    }

    //Safe the new session in the "all" list
    CALENDAR_ELEMENTS.allSessions.push(CALENDAR_ELEMENTS.newSession);
    saveDataOnLS("calendar-items-all", CALENDAR_ELEMENTS.allSessions)
}

/**
 * Calculates the duration of a training session
 */
function calcDuration(startH, endH, startM, endM) {
    const startTotal = startH * 60 + startM;
    const endTotal = endH * 60 + endM;

    let duration = endTotal - startTotal;

    if (duration < 0) {
        duration += 24 * 60;
    }

    return duration;
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
    loadInputValuesCalendar()
    fadeIn('calendar-input-0', 'flex')
    document.getElementById('next-input-step').addEventListener('click', nextInputStep)
    swipeCategory(0);
    selectDate('today');
    //Reset all variables
    CALENDAR_ELEMENTS.newSession.type = undefined;
    CALENDAR_ELEMENTS.newSession.date.dayOfMonth = undefined
    CALENDAR_ELEMENTS.newSession.date.month = undefined;
    CALENDAR_ELEMENTS.newSession.duration = undefined;
    CALENDAR_ELEMENTS.newSession.startTime = undefined;
    CALENDAR_ELEMENTS.newSession.endTime = undefined;
}

/**
 * Load sessions from LS
 */
function loadSessionsFromLS() {
    let items = JSON.parse(localStorage["calendar-items-today"])

    for (let i = 0; i < items.length; i++) {
        document.getElementById('trainings-today-listed').innerHTML += items[i];
    }

    document.getElementById('training-sessions').innerHTML += `
                    <div class="training-session" style="opacity: 0;">
                        <div class="session-header">
                            <h2>Placeholder</h2>
                            <div class="unit-icon">
                               
                            </div>
                        </div>
                        <div class="time-settings">
                            <div class="start period">
                                <h3 class="time-start-and-end">
                                </h3>
                                <h4>Start</h4>
                            </div>
                            <div class="duration">
                                <h5 class="this-duration">Placeholder</h5>
                            </div>
                            <div class="end period">
                                <h3 class="time-start-and-end">
                                </h3>
                                <h4>End</h4>
                            </div>
                        </div>
                    </div>
    `
}
loadSessionsFromLS()

/**
 * Selects the calendar button and changes the UI
 */
function selectThisCalendar(element) {
    let buttons = document.getElementsByClassName('calendar-select-btn');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('calendar-select-btn-active');
    }

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] == element) {
            switchCalendarContent(i);
        }
    }

    element.classList.add('calendar-select-btn-active');
}

/**
 * TODAY / CALENDAR
 */
function switchCalendarContent(index) {
    resetCalInput()
    if (index === 0) {
        CALENDAR_ELEMENTS.state = 1;
        slideUp();
    } else {
        CALENDAR_ELEMENTS.state = 0;
        slideUp();
    }
    changeCalendarContentUI(CALENDAR_ELEMENTS.state)
}

/**
 * SLIDE UP
 */
function slideUp() {
    const slider = document.getElementById('training-sessions-flex');
    const close_or_open = document.getElementById('add-session');
    close_or_open.style.transform = 'rotate(45deg)'
    slider.style.transform = "translateY(-27%)"
}

/**
 * SLIDE DOWN
 */
function slideDown() {
    const slider = document.getElementById('training-sessions-flex');
    const close_or_open = document.getElementById('add-session');
    close_or_open.style.transform = 'rotate(0deg)'

    slider.style.transform = "translateY(0)"
}

/**
 * Changes the month
 */
function swipeMonth(dir) {
    CALENDAR_ELEMENTS.currentMonth += dir;

    if (CALENDAR_ELEMENTS.currentMonth < 0) {
        CALENDAR_ELEMENTS.currentMonth = CALENDAR_ELEMENTS.month.length - 1;
    } else if (CALENDAR_ELEMENTS.currentMonth > CALENDAR_ELEMENTS.month.length - 1) {
        CALENDAR_ELEMENTS.currentMonth = 0;
    }
    loadMonths()
}

/**
 * Load events for the selected month
 */
function showSessionsMonth() {
    const box = document.getElementById('trainings-month-listed');
}

/**
 * Date selector
 */
function selectDate(type) {
    const month = document.getElementById('month-num');
    const month_num = document.getElementById('num-of-month');

    let disabled = false;

    month.disabled = false;
    month_num.disabled = false;
    const date = new Date();
    if (type === "today") {
        month.disabled = true;
        month_num.disabled = true;
        disabled = true;
        month.value = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        month_num.value = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    }

    if (disabled) {
        month.style.color = "grey";
        month_num.style.color = "grey";
    } else {
        month.style.color = "white";
        month_num.style.color = "white";
    }
}
selectDate("today");