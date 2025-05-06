/**
 * PROJEKT
 */
let SETTINGS = {
    path: "",
    userImgPath: "",
    lastUpdate: {
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        year: new Date().getFullYear()
    }
}

/**
 * INDEX_ELEMENTS:
 * 
 * Elements and values of the index.html file.
 */
let INDEX_ELEMENTS = {
    path: './index.html',
    userImgPath: './images/running-profile.png'
}

/**
 * TRAINING_ELEMENTS:
 * 
 * Elements and values of the training.html file.
 */
let TRAINING_ELEMENTS = {
    upperSite: "./index.html",
    userImgPath: './images/running-profile.png',
    sections_output: document.getElementById('section-flex'),
    number_of_sections: 4,
    section_backgrounds: [
        '../images/plan_your_training.jpg',
        '../images/start_your_training.jpg',
        '../images/learn_about_your_muscles.jpg',
        '../images/stay_hydrated.avif'
    ],
    section_headlines: [
        'Plan your training',
        'Start your training',
        'Learn about your muscles',
        'Stay hydrated'
    ],
    section_links: [
        './pages_training/calendar.html',
        './pages_training/live-session.html',
        'idk',
        './pages_training/drink-log.html',
    ]
}

/**
 * CALENDAR_ELEMENTS:
 * 
 * Elements and values of the calendar.html file.
 */
let CALENDAR_ELEMENTS = {
    upperSite: "./training.html",
    userImgPath: "./../images/running-profile.png",
    weekday: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weekdayShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    day_times: dayTimes = ["Morning", "Noon", "Afternoon", "Evening", "Night"],
    state: 1,
    prevState: 1,
    types: [
        {
            'name': 'strength training',
            'icon': '<i class="fa-solid fa-dumbbell"></i>',
            'color': 0,
            'previewImg': './images/preview-img-strength-training.jpg',
            'calPerSec': 7 / 60,
            'sweatPerSec': 0.6 / 3600
        },
        {
            'name': 'running',
            'icon': '<i class="fa-solid fa-person-running"></i>',
            'color': 1,
            'previewImg': './images/preview-img-running.jpg',
            'calPerSec': 10 / 60,
            'sweatPerSec': 1 / 3600
        },
        {
            'name': 'cycling',
            'icon': '<i class="fa-solid fa-person-biking"></i>',
            'color': 2,
            'previewImg': './images/preview-img-cycling.jpg',
            'calPerSec': 8 / 60,
            'sweatPerSec': 1 / 3600
        },
        {
            'name': 'swimming',
            'icon': '<i class="fa-solid fa-person-swimming"></i>',
            'color': 3,
            'previewImg': './images/preview-img-swimming.jpg',
            'calPerSec': 8 / 60,
            'sweatPerSec': 0.8 / 3600
        },
        {
            'name': 'yoga',
            'icon': '<i class="fa-solid fa-heart"></i>',
            'color': 4,
            'previewImg': './images/preview-img-yoga.jpg',
            'calPerSec': 3.5 / 60,
            'sweatPerSec': 0.3 / 3600
        }
    ],
    currentCategory: 0,
    currentInput: 0,
    swipeLeft: document.getElementById('swipe-category-left'),
    swipeRight: document.getElementById('swipe-category-right'),
    newSession: {
        type: undefined,
        startTime: undefined,
        endTime: undefined,
        date: {
            month: undefined,
            dayOfMonth: undefined,
            year: undefined
        },
        duration: undefined,
    },
    colorCodes: [
        {
            "main": "#355B70",
            "darkMain": "#B8DEE4"
        },
        {
            "main": "#B1D4E8",
            "darkMain": "#3F6476"
        },
        {
            "main": "#8A9CBF",
            "darkMain": "#354E68"
        },
        {
            "main": "#7F9FAF",
            "darkMain": "#2C4557"
        },
        {
            "main": "#6B8CA3",
            "darkMain": "#41586E"
        }
    ],
    sessionsToday: [],
    sessionsCompleted: 0,
    sessionsToComplete: 0,
    allSessions: [],
    currentMonth: new Date().getDay(),
    currentMonthStartZero: 0,
    lastSevDaysChartData: [
    ]
}


/**
 * LIVE_SESSION_ELEMENTS
 * 
 * Elements and values of a live session
 */
let LIVE_SESSION_ELEMENTS = {
    upperSite: './training.html',
    userImgPath: './../images/running-profile.png',
    currentSessionIDSelected: -1,
    currentSession: undefined,
    trackingArea: document.getElementById('tracking-area'),
    sessionRunning: false,
    timeTracker: undefined,
    timeLimitReached: false,
    trackStates: [
        `<div id="track-state-1" class="track-state">
            <div id="active-timer-start" class="active-timer-settings-button active-timer-start" onclick="trackSession()">
                <i class="fa-solid fa-play"></i>
            </div>
        </div>`,
        `<div id="track-state-2" class="track-state">
            <div id="active-timer-stop" class="active-timer-settings-button" onclick="setTrackState(2); stopTracking()">
                <i class="fa-solid fa-pause"></i>
            </div>
        </div>`,
        `<div id="track-state-3" class="track-state">
            <div id="active-timer-resume" class="active-timer-settings-button active-timer-start" onclick="trackSession(); setTrackState(1)">
                <i class="fa-solid fa-play"></i>
            </div>
            <div id="active-timer-end" class="active-timer-settings-button" onclick="openWarning()">
                <i class="fa-solid fa-stop"></i>
            </div>
        </div>`
    ],
    caloriesBurned: 0,
    sweatLoss: 0,
    caloriesBurnedTotal: 0,
    sweatLossTotal: 0,
    caloriesBurnedLastMeasure: 0,
    stateArrows: [
        `<span class="material-symbols-outlined">
            arrow_drop_up
        </span>`,
        `<span class="material-symbols-outlined">
            arrow_drop_down
        </span>`
    ]
}

/**
 * DRINK_LOG_ELEMENTS
 * 
 * Elements and values of the drink log
 */
let DRINK_LOG_ELEMENTS = {
    upperSite: './training.html',
    userImgPath: './../images/running-profile.png',
    input_values: [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "delete"],
    goal: 0,
    reached: 0,
}

/**
 * FITBALANCE_ELEMENTS
 * 
 * Elements and values of the fitbalance page
 */
let FITBALANCE_ELEMENTS = {
    upperSite: './index.html',
    userImgPath: './images/running-profile.png',
    welcomeBoxState: 0,
    welcomeBox: document.getElementById('welcome-box')
}


/**
 * Setup for LS (Local Storage)
 */
function setupLS() {
    if (!localStorage["calendar-items-today"]) {
        localStorage["calendar-items-today"] = '[]'
    }
    if (!localStorage["calendar-items-all"]) {
        localStorage["calendar-items-all"] = '[]';
    }
    if (!localStorage["completed-sessions"]) {
        localStorage['completed-sessions'] = 0;
    }
    if (!localStorage["sessions-to-complete"]) {
        localStorage['sessions-to-complete'] = 0;
    }
    if (!localStorage['latest-update']) {
        saveDataOnLS('latest-update', SETTINGS.lastUpdate);
    } else if (localStorage['latest-update']) {
        SETTINGS.lastUpdate = JSON.parse(localStorage['latest-update'])
    }
    if (!localStorage["sessions-completed-chart"]) {
        loadChartData()
    }
    if (!localStorage['calories-burned-today']) {
        localStorage['calories-burned-today'] = 0;
    }
    if (!localStorage['calories-burned-lastMeasure']) {
        localStorage['calories-burned-lastMeasure'] = 0;
    }
    if (!localStorage['hydration-goal']) {
        localStorage['hydration-goal'] = 0;
    }
    if (!localStorage['hydration-reached']) {
        localStorage['hydration-reached'] = 0;
    }
}
setupLS()

/**
 * Loads data into JSONs
 */
function loadFromLS() {
    CALENDAR_ELEMENTS.allSessions = JSON.parse(localStorage['calendar-items-all']);
    loadSessionsToday()
    CALENDAR_ELEMENTS.sessionsCompleted = JSON.parse(localStorage['completed-sessions']);
    CALENDAR_ELEMENTS.sessionsToComplete = JSON.parse(localStorage['sessions-to-complete']);
    CALENDAR_ELEMENTS.lastSevDaysChartData = JSON.parse(localStorage["sessions-completed-chart"])
    LIVE_SESSION_ELEMENTS.caloriesBurnedTotal = JSON.parse(localStorage['calories-burned-today']);
    LIVE_SESSION_ELEMENTS.caloriesBurnedLastMeasure = JSON.parse(localStorage['calories-burned-lastMeasure']);
    getReference()
    DRINK_LOG_ELEMENTS.goal = JSON.parse(localStorage['hydration-goal']);
    DRINK_LOG_ELEMENTS.reached = JSON.parse(localStorage['hydration-reached']);
}
loadFromLS()

/**
 * References of date
 */
function getReference() {
    for (let i = 0; i < CALENDAR_ELEMENTS.lastSevDaysChartData.length; i++) {
        const date = new Date(CALENDAR_ELEMENTS.lastSevDaysChartData[i].date);

        CALENDAR_ELEMENTS.lastSevDaysChartData[i].date = date;
    }
}

/**
 * Updates chart
 */
function updateChart() {
    if (!isToday(new Date(`${SETTINGS.lastUpdate.month}.${SETTINGS.lastUpdate.date}.${SETTINGS.lastUpdate.year}`))) {
        let daysBetween = calcDaysBetween(new Date(`${CALENDAR_ELEMENTS.lastSevDaysChartData[0].date.getMonth() + 1}.${CALENDAR_ELEMENTS.lastSevDaysChartData[0].date.getDate()}.${CALENDAR_ELEMENTS.lastSevDaysChartData[0].date.getFullYear()}`), new Date(`${new Date().getMonth() + 1}.${new Date().getDate()}.${new Date().getFullYear()}`));
        moveDaysBetween(daysBetween)
        return true;
    }
    return false;
}

/**
 * Updates training sessions done
 */
function updateSessionsDone() {
    if (!isToday(new Date(`${SETTINGS.lastUpdate.month}.${SETTINGS.lastUpdate.date}.${SETTINGS.lastUpdate.year}`))) {
        CALENDAR_ELEMENTS.sessionsCompleted = 0;
        CALENDAR_ELEMENTS.sessionsToComplete = getSessionsOpen();
        saveDataOnLS('completed-sessions', CALENDAR_ELEMENTS.sessionsCompleted)
        saveDataOnLS('sessions-to-complete', CALENDAR_ELEMENTS.sessionsToComplete)
        return true;
    }
    return false;
}

/**
 * Updates calories burned
*/
function updateCaloriesBurned() {
    if (!isToday(new Date(`${SETTINGS.lastUpdate.month}.${SETTINGS.lastUpdate.date}.${SETTINGS.lastUpdate.year}`))) {
        LIVE_SESSION_ELEMENTS.caloriesBurnedTotal = 0;
        LIVE_SESSION_ELEMENTS.caloriesBurnedLastMeasure = localStorage['calories-burned-today'];

        saveDataOnLS('calories-burned-lastMeasure', LIVE_SESSION_ELEMENTS.caloriesBurnedLastMeasure)
        saveDataOnLS('calories-burned-today', LIVE_SESSION_ELEMENTS.caloriesBurnedTotal)
        return true;
    }
    return false;
}


/**
 * Update
 */
function update() {
    SETTINGS.lastUpdate.month = new Date().getMonth() + 1;
    SETTINGS.lastUpdate.date = new Date().getDate();
    SETTINGS.lastUpdate.year = new Date().getFullYear()

    saveDataOnLS('latest-update', SETTINGS.lastUpdate)
}

/**
 * Moves whole chart data
 */
function moveDaysBetween(num) {
    for (let i = num; i > 0; i--) {
        for (let j = CALENDAR_ELEMENTS.lastSevDaysChartData.length - 1; j >= 0; j--) {
            CALENDAR_ELEMENTS.lastSevDaysChartData[j].date.setDate(CALENDAR_ELEMENTS.lastSevDaysChartData[j].date.getDate() + 1);

        }
        for (let i = CALENDAR_ELEMENTS.lastSevDaysChartData.length - 2; i >= 0; i--) {
            CALENDAR_ELEMENTS.lastSevDaysChartData[i + 1].sessionsCompleted = CALENDAR_ELEMENTS.lastSevDaysChartData[i].sessionsCompleted;
        }
    }
    CALENDAR_ELEMENTS.lastSevDaysChartData[0].sessionsCompleted = 0;
    saveDataOnLS("sessions-completed-chart", CALENDAR_ELEMENTS.lastSevDaysChartData)
}

/**
 * Safes data
 */
function saveDataOnLS(ID, array_or_json) {
    localStorage[ID] = JSON.stringify(array_or_json);
}


function loadChartData() {
    let date = new Date();
    const today = new Date()

    for (let i = 0; i < 7; i++) {
        date = new Date()
        date.setDate(today.getDate() - i);
        let newData = {
            date: date,
            sessionsCompleted: 0
        }
        CALENDAR_ELEMENTS.lastSevDaysChartData.push(newData);
    }

    saveDataOnLS('sessions-completed-chart', CALENDAR_ELEMENTS.lastSevDaysChartData)
}


/**
 * Function to create a copy of an object to avoid reference problems 
 * @param {Object} o Object to copy 
 */
function getCopyOf(o) {
    return JSON.parse(JSON.stringify(o));
}

/**
 * Checks if a date is today
 * @param {*} date 
 * @returns boolean
 */
function isToday(date) {
    const today = new Date()

    return today.getDate() === date.getDate() &&
        today.getMonth() === date.getMonth() &&
        today.getFullYear() === date.getFullYear()
}

/**
 * Calculates how much days are between two dates
 */
function calcDaysBetween(date1, date2) {
    const diffMS = Math.abs(date2 - date1);
    console.log(diffMS);

    const perDay = 1000 * 60 * 60 * 24;

    console.log(perDay);

    const days = Math.floor(diffMS / perDay);

    return days;
}

/**
 * Function to get the number of sessions today
 */
function getSessionsOpen() {
    return CALENDAR_ELEMENTS.sessionsToday.length;
}

/**
 * Loads todays sessions for a new day
 */
function loadSessionsToday() {
    for (let i = 0; i < CALENDAR_ELEMENTS.allSessions.length; i++) {
        if (CALENDAR_ELEMENTS.allSessions[i].date.dayOfMonth == new Date().getDate()) {
            CALENDAR_ELEMENTS.sessionsToday.push(CALENDAR_ELEMENTS.allSessions[i]);
        }
    }
    saveDataOnLS('calendar-items-today', CALENDAR_ELEMENTS.sessionsToday)
}

/**
 * Searches for the index of a session in the all array
 */
function indexOf(session) {
    for (let i = 0; i < CALENDAR_ELEMENTS.allSessions.length; i++) {
        if (areSessionsEqual(CALENDAR_ELEMENTS.allSessions[i], session)) {
            return i;
        }
    }
}