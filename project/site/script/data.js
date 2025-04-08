/**
 * PROJEKT
 */
let SETTINGS = {
    path: "",
    userImgPath: ""
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
 * Elements and values of the calendar
 */
let CALENDAR_ELEMENTS = {
    upperSite: "./training.html",
    userImgPath: "./../images/running-profile.png",
    weekday: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    day_times: dayTimes = ["Morning", "Noon", "Afternoon", "Evening", "Night"],
    state: 1,
    prevState: 1,
    types: [
        {
            'name': 'strength training',
            'icon': '<i class="fa-solid fa-dumbbell"></i>',
            'color': 0
        },
        {
            'name': 'running',
            'icon': '<i class="fa-solid fa-person-running"></i>',
            'color': 1
        },
        {
            'name': 'cycling',
            'icon': '<i class="fa-solid fa-person-biking"></i>',
            'color': 2
        },
        {
            'name': 'swimming',
            'icon': '<i class="fa-solid fa-person-swimming"></i>',
            'color': 3
        },
        {
            'name': 'yoga',
            'icon': '<i class="fa-solid fa-heart"></i>',
            'color': 4
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
        },
        duration: undefined,
    },
    colorCodes: [
        {
            "main": "#A8D8F0",     // helles Eisblau
            "darkMain": "#5CB0D6"
        },
        {
            "main": "#7DB8DE",     // leicht kräftigeres Himmelblau
            "darkMain": "#3F8FBA"
        },
        {
            "main": "#559ACB",     // klassisches Mittelblau
            "darkMain": "#2D6B97"
        },
        {
            "main": "#397EB2",     // tieferes Blau
            "darkMain": "#215C84"
        },
        {
            "main": "#266393",     // sattes Ozeanblau
            "darkMain": "#18456A"
        }
    ],
    sessionsToday: [],
    allSessions: [],
    currentMonth: new Date().getMonth(),
}

/**
 * LIVE_SESSION_ELEMENTS
 * 
 * Elements and values of a live session
 */
let LIVE_SESSION_ELEMENTS = {
    upperSite: './training.html',
    userImgPath: './../images/running-profile.png'
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
}
setupLS()

/**
 * Loads data into JSONs
 */
function loadFromLS() {
    CALENDAR_ELEMENTS.sessionsToday = JSON.parse(localStorage["calendar-items-today"]);
    CALENDAR_ELEMENTS.allSessions = JSON.parse(localStorage['calendar-items-all'])
}
loadFromLS()

/**
 * Safes data
 */
function saveDataOnLS(ID, array_or_json) {
    localStorage[ID] = JSON.stringify(array_or_json);
}