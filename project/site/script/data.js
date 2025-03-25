/**
 * PROJEKT
 */
let SETTINGS = {
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
 * HEADER_ELEMENTS:
 * 
 * Elements and values of the header
 */
let HEADER_ELEMENTS = {
    headerBox: document.getElementById('header'),
    innerBox: document.getElementById('header-inner'),
    navOffsetTop: 2,
    prevScrollY: 0,
    state: 0,
    timeOut: undefined,
    logo: `<div id="fitbalance-logo">
              <h3 id="fitbalance-logo-headline">Fitbalance</h3>
           </div>`,
    userProfile: `<div id="user-stats">
                    <div id="user-stats-img">
                        <img src="${document.title === 'Dashboard' ? "" : "."}./images/running-profile.png" alt="user-img"> <!-- profile image -->
                    </div>
                    <h4 id="user-stats-level-name">Level 1</h4>
                  </div>`,
}

/**
 * CALENDAR_ELEMENTS:
 * 
 * Elements and values of the calendar
 */
let CALENDAR_ELEMENTS = {
    weekday: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    day_times: dayTimes = ["Morning", "Noon", "Afternoon", "Evening", "Night"],
    state: 1,
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
            "main": "#A7C7E7",
            "darkMain": "#6D91B1"
        },
        {
            "main": "#BFD8E6",
            "darkMain": "#7E9FB8"
        },
        {
            "main": "#8ABAD3",
            "darkMain": "#5B8CA8"
        },
        {
            "main": "#C3DCE3",
            "darkMain": "#829DA8"
        },
        {
            "main": "#D4E6F1",
            "darkMain": "#96AEC1"
        }
    ]
}