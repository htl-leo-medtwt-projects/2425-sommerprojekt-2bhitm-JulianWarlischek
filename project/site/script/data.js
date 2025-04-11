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
            "main": "#355B70",     // bläulicher Dunkelton
            "darkMain": "#B8DEE4"  // heller als main
        },
        {
            "main": "#B1D4E8",
            "darkMain": "#3F6476"  // kräftig dunkler als main
        },
        {
            "main": "#8A9CBF",
            "darkMain": "#354E68"  // kräftig dunkler als main
        },
        {
            "main": "#7F9FAF",
            "darkMain": "#2C4557"  // kräftig dunkler als main
        },
        {
            "main": "#6B8CA3",
            "darkMain": "#41586E"  // dunkler als main
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
    if(!localStorage["sessions-to-complete"]){
        localStorage['sessions-to-complete'] = 0;
    }
    if(!localStorage["sessions-completed-chart"]){
        loadChartData()
    }
}
setupLS()

/**
 * Loads data into JSONs
 */
function loadFromLS() {
    CALENDAR_ELEMENTS.allSessions = JSON.parse(localStorage['calendar-items-all']);
    CALENDAR_ELEMENTS.sessionsToday = JSON.parse(localStorage['calendar-items-today']);
    CALENDAR_ELEMENTS.sessionsCompleted = JSON.parse(localStorage['completed-sessions']);
    CALENDAR_ELEMENTS.sessionsToComplete = JSON.parse(localStorage['sessions-to-complete']);
}
loadFromLS()

/**
 * Safes data
 */
function saveDataOnLS(ID, array_or_json) {
    localStorage[ID] = JSON.stringify(array_or_json);
}


function loadChartData() {
    const date = new Date();
    const today = new Date()
    let dates = []

    for (let i = 0; i < 7; i++) {
        date.setDate(today.getDate() - i);
        dates.push(date)
        let newData = {
            date: dates[i],
            sessionsCompleted: 0
        }
        CALENDAR_ELEMENTS.lastSevDaysChartData.push(newData);
    }

    console.log(dates);
    
}


/**
 * Function to create a copy of an object to avoid reference problems 
 * @param {Object} o Object to copy 
 */
function getCopyOf(o) {
    return JSON.parse(JSON.stringify(o));
}