/**
 * PROJEKT
 */
let SETTINGS = {
    path: ""
}

/**
 * INDEX_ELEMENTS:
 * 
 * Elements and values of the index.html file.
 */
let INDEX_ELEMENTS = {
}

/**
 * TRAINING_ELEMENTS:
 * 
 * Elements and values of the training.html file.
 */
let TRAINING_ELEMENTS = {
    upperSite: "./index.html",
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
        './calendar.html'
    ]
}

/**
 * CALENDAR_ELEMENTS:
 * 
 * Elements and values of the calendar
 */
let CALENDAR_ELEMENTS = {
    upperSite: "/training.html",
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
        date: undefined
    },
    colorCodes: [
        {
            "main": "#B0D9F1",
            "darkMain": "#4A7DA8"
        },
        {
            "main": "#86B6D2",
            "darkMain": "#2D5E85"
        },
        {
            "main": "#6096BA",
            "darkMain": "#1E4968"
        },
        {
            "main": "#3B7EA1",
            "darkMain": "#103A54"
        },
        {
            "main": "#1F5F8B",
            "darkMain": "#0A2F47"
        }
    ],
    sessionsToday: [],
    currentMonth: new Date().getMonth(),
}


/**
 * Setup for LS (Local Storage)
 */
function setupLS() {    
    if (!localStorage["calendar-items-today"]) {
        localStorage["calendar-items-today"] = '[]'
    }
}
setupLS()

/**
 * Loads data into JSONs
 */
function loadFromLS() {
    CALENDAR_ELEMENTS.sessionsToday = JSON.parse(localStorage["calendar-items-today"]);
}
loadFromLS()

/**
 * Safes data
 */
function saveDataOnLS(ID, array_or_json) {
    localStorage[ID] = JSON.stringify(array_or_json);
}