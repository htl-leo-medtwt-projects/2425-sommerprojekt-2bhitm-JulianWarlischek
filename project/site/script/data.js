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
        './pages_training/live-session.html'
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
            'previewImg': './images/preview-img-strength-training.jpg'
        },
        {
            'name': 'running',
            'icon': '<i class="fa-solid fa-person-running"></i>',
            'color': 1,
            'previewImg': './images/preview-img-running.jpg'
        },
        {
            'name': 'cycling',
            'icon': '<i class="fa-solid fa-person-biking"></i>',
            'color': 2,
            'previewImg': './images/preview-img-cycling.jpg'
        },
        {
            'name': 'swimming',
            'icon': '<i class="fa-solid fa-person-swimming"></i>',
            'color': 3,
            'previewImg': './images/preview-img-swimming.jpg'
        },
        {
            'name': 'yoga',
            'icon': '<i class="fa-solid fa-heart"></i>',
            'color': 4,
            'previewImg': './images/preview-img-yoga.jpg'
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
    currentSessionIDSelected: -1
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
    getReference()
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
        let daysBetween = calcDaysBetween(CALENDAR_ELEMENTS.lastSevDaysChartData[0].date, new Date());

        moveDaysBetween(daysBetween)

        console.log("Days between: " + daysBetween);


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
        console.log("Executed");
        saveDataOnLS('completed-sessions', CALENDAR_ELEMENTS.sessionsCompleted)
        saveDataOnLS('sessions-to-complete', CALENDAR_ELEMENTS.sessionsToComplete)
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
    console.log(getCopyOf(CALENDAR_ELEMENTS.lastSevDaysChartData));
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

    const perDay = 1000 * 60 * 60 * 24;
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