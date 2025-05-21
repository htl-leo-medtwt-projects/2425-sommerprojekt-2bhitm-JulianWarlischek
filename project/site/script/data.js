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
        './pages_training/muscles.html',
        './pages_training/drink-log.html'
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
    welcomeBox: document.getElementById('welcome-box'),
    questionColors: [
        {
            "bg": "#B7DFFC",
            "border": "#5A9ECF"
        },
        {
            "bg": "#FFD6D6",
            "border": "#B25A5A"
        },
        {
            "bg": "#D0F5C8",
            "border": "#6FA46B"
        },
        {
            "bg": "#FFF1B8",
            "border": "#B2933A"
        },
        {
            "bg": "#E6D6FF",
            "border": "#7A5FB2"
        },
        {
            "bg": "#FFCFCF",
            "border": "#A95555"
        },
        {
            "bg": "#CFFFE3",
            "border": "#4DA67E"
        },
        {
            "bg": "#FFF4CC",
            "border": "#B29A4F"
        },
        {
            "bg": "#C8F0FF",
            "border": "#4F9CB2"
        },
        {
            "bg": "#D7D4FF",
            "border": "#6863B2"
        }
    ],
    usedColors: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ],
    questions: [
        {
            "headline": "How do I track my calories?",
            "description": "Just start a workout and let the app do the math! We'll estimate your burned calories for you — no calculator or sweat required (well, maybe a little sweat)."
        },
        {
            "headline": "Where can I log my water intake?",
            "description": "Head over to the 'Stay hydrated' tab under 'Training'. There, you can set your daily goal and log every glorious sip. Your future hydrated self will thank you!"
        },
        {
            "headline": "Can I create custom workouts?",
            "description": "Absolutely! Whether you're into yoga, cycling, or lifting like a superhero — plan your workouts down to the minute and revisit them anytime in the calendar."
        },
        {
            "headline": "Do I need to register or log in?",
            "description": "No pressure! You can try out the app without logging in. But if you want your progress to stick around longer than your last gym crush — registration helps!"
        },
        {
            "headline": "Can I learn about muscles?",
            "description": "Totally! Tap a muscle, and we’ll show you what it does and how to train it — it’s like a friendly anatomy lesson without the textbook."
        },
        {
            "headline": "Is my progress visible in a dashboard?",
            "description": "You bet. Your workouts, hydration, and burnt calories all show up in one place. It's like your fitness life got a personal assistant."
        }
    ]
}

/**
 * USER_ELEMENTS
 * 
 * Elements and values of the fitbalance page
 */
let USER_ELEMENTS = {
    upperSite: './index.html',
    userImgPath: './images/running-profile.png',
    thisUser: {
        name: '',
        age: '',
        mail: '',
        gender: '',
        weight: '',
        height: '',
        password: '',
        profileColor: '',
        token: 0,
        activeOnDevice: false
    },
    unsavedChanges: false,
    registerInput: [
        {
            'headline': 'Set weight',
            'img': "../images/weight-input.gif",
            'html': '<p id="register-weight-label"></p><input onchange="riseInputCounter()" type="range" id="register-weight" min="30" max="200" value="30" oninput="updateWeightLabel()">',
        },
        {
            'headline': 'Set height',
            'img': "../images/heigt-input.gif",
            'html': '<p id="register-height-label"></p><input onchange="riseInputCounter()" type="range" id="register-height" min="30" max="200" value="30" oninput="updateHeightLabel()">',
        }
    ],
    registerUser: {
        name: '',
        age: '',
        mail: '',
        gender: '',
        weight: '',
        height: '',
        password: '',
        profileColor: '',
    },
    registerInputIndex: 0,
    loggedUsers: [],
    tokenSettings: {
        tokenLength: 70,
    }
}

/**
 * MUSCLE_ELEMENTS
 * 
 * Elements and values of the muscles.html file.
 */
let MUSCLE_ELEMENTS = {
    upperSite: "./training.html",
    userImgPath: "./../images/running-profile.png",
    muscles: [
        {
            "id": 1,
            "src": "../../images/muscles/chest.png",
            "name": "Chest",
            "description": "The chest muscles, primarily the pectoralis major and minor, are responsible for pushing movements and play a crucial role in upper body strength. They are involved in exercises like bench presses and push-ups.",
            "recommendedExercises": ["Bench Press", "Push-Up", "Incline Dumbbell Press"]
        },
        {
            "id": 2,
            "src": "../../images/muscles/shoulders.png",
            "name": "Shoulders",
            "description": "The shoulders are a complex joint that allows for a wide range of motion. They are made up of several muscles, including the deltoids and rotator cuff muscles, which are essential for overhead movements and stability.",
            "recommendedExercises": ["Overhead Press", "Lateral Raise", "Face Pulls"]
        },
        {
            "id": 3,
            "src": "../../images/muscles/triceps.png",
            "name": "Triceps",
            "description": "The triceps are the muscles located at the back of the upper arm. They are responsible for extending the elbow joint and play a crucial role in pushing movements, such as bench presses and push-ups.",
            "recommendedExercises": ["Triceps Dips", "Skull Crushers", "Close-Grip Bench Press"]
        },
        {
            "id": 4,
            "src": "../../images/muscles/back.png",
            "name": "Back",
            "description": "The back muscles, including the latissimus dorsi and trapezius, are responsible for pulling movements and play a crucial role in maintaining good posture. They are involved in exercises like pull-ups and rows.",
            "recommendedExercises": ["Pull-Up", "Barbell Row", "Deadlift"]
        },
        {
            "id": 5,
            "src": "../../images/muscles/biceps.png",
            "name": "Biceps",
            "description": "The biceps are the muscles located at the front of the upper arm. They are responsible for flexing the elbow joint and play a crucial role in pulling movements, such as curls and pull-ups.",
            "recommendedExercises": ["Barbell Curl", "Hammer Curl", "Chin-Up"]
        },
        {
            "id": 6,
            "src": "../../images/muscles/core.png",
            "name": "Core",
            "description": "The core muscles include the abdominal muscles, obliques, and lower back muscles. They are responsible for stabilizing the spine and pelvis and play a crucial role in maintaining good posture and balance.",
            "recommendedExercises": ["Plank", "Russian Twist", "Leg Raise"]
        },
        {
            "id": 7,
            "src": "../../images/muscles/quads.png",
            "name": "Quadriceps",
            "description": "The quadriceps, or quads, are a group of muscles located at the front of the thigh. They are responsible for extending the knee and play a crucial role in activities like squatting and jumping.",
            "recommendedExercises": ["Squat", "Leg Press", "Lunge"]
        },
        {
            "id": 8,
            "src": "../../images/muscles/glutes.png",
            "name": "Glutes",
            "description": "The glutes, or gluteal muscles, are located in the buttocks and are responsible for hip extension, abduction, and external rotation. They play a crucial role in movements like squats, lunges, and running.",
            "recommendedExercises": ["Hip Thrust", "Glute Bridge", "Bulgarian Split Squat"]
        }
    ],
    muscleSelected: 0,
    diffColors: [
        "#00FF00", // 1 - Very Easy (Bright Green)
        "#32CD32", // 2 - Easy (Lime Green)
        "#9ACD32", // 3 - Light-Medium (Yellow Green)
        "#6B8E23", // 4 - Medium (Olive Green)
        "#FFFF00", // 5 - Neutral (Yellow)
        "#FFD700", // 6 - Slightly Harder (Gold)
        "#FFA500", // 7 - Hard (Orange)
        "#FF8C00", // 8 - Very Hard (Dark Orange)
        "#FF4500", // 9 - Extreme (Orange Red)
        "#FF0000"  // 10 - Maximum Difficulty (Red)
    ],
    exercises: [
        [
            {
                name: "Barbell Bench Press",
                description: "A classic compound movement that targets the pectoral muscles. Performed lying on a flat bench, pressing a barbell upward from chest level.",
                difficulty: "medium",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Dumbbell Flyes",
                description: "An isolation exercise that stretches and contracts the chest muscles. Performed lying on a bench with arms outstretched and bringing dumbbells together.",
                difficulty: "medium",
                equipment: "dumbbells",
                type: "isolation"
            },
            {
                name: "Incline Bench Press",
                description: "Targets the upper chest. Performed on an inclined bench pressing a barbell or dumbbells.",
                difficulty: "medium",
                equipment: "barbell or dumbbells",
                type: "compound"
            },
            {
                name: "Push-Ups",
                description: "A bodyweight exercise that strengthens the chest, triceps, and shoulders. Can be modified for different skill levels.",
                difficulty: "easy",
                equipment: "bodyweight",
                type: "compound"
            },
            {
                name: "Cable Crossover",
                description: "Performed using cable machines to isolate and contract the chest through a wide range of motion.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Chest Dips",
                description: "Done on parallel bars, leaning forward to emphasize chest activation.",
                difficulty: "hard",
                equipment: "dip bars",
                type: "compound"
            },
            {
                name: "Machine Chest Press",
                description: "A beginner-friendly machine-based press to target the chest.",
                difficulty: "easy",
                equipment: "machine",
                type: "compound"
            },
            {
                name: "Incline Dumbbell Flyes",
                description: "Focuses on the upper chest with a stretching motion on an incline bench.",
                difficulty: "medium",
                equipment: "dumbbells",
                type: "isolation"
            },
            {
                name: "Decline Bench Press",
                description: "Emphasizes the lower portion of the pectorals. Performed on a decline bench.",
                difficulty: "medium",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Pec Deck Machine",
                description: "An isolation machine that mimics the motion of a dumbbell flye.",
                difficulty: "easy",
                equipment: "machine",
                type: "isolation"
            }
        ],

        [
            {
                name: "Overhead Press",
                description: "A compound movement targeting the deltoids and triceps. Press a barbell overhead from shoulder level.",
                difficulty: "hard",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Lateral Raises",
                description: "An isolation exercise to develop the side delts by raising dumbbells outward to shoulder level.",
                difficulty: "medium",
                equipment: "dumbbells",
                type: "isolation"
            },
            {
                name: "Front Raises",
                description: "Focuses on the front delts by lifting dumbbells or plates forward and up to eye level.",
                difficulty: "medium",
                equipment: "dumbbells or plate",
                type: "isolation"
            },
            {
                name: "Arnold Press",
                description: "A variation of the overhead press with a rotational movement for full shoulder development.",
                difficulty: "hard",
                equipment: "dumbbells",
                type: "compound"
            },
            {
                name: "Rear Delt Flyes",
                description: "Targets the rear delts. Performed bent over while lifting dumbbells to the sides.",
                difficulty: "medium",
                equipment: "dumbbells",
                type: "isolation"
            },
            {
                name: "Machine Shoulder Press",
                description: "A guided press machine to safely train shoulder strength and hypertrophy.",
                difficulty: "easy",
                equipment: "machine",
                type: "compound"
            },
            {
                name: "Cable Lateral Raise",
                description: "Performed with a cable to keep tension on the side delts throughout the movement.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Push Press",
                description: "A powerful movement using a leg drive to help press a barbell overhead.",
                difficulty: "hard",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Plate Front Raise",
                description: "Performed by lifting a weight plate in front of the body to target the anterior deltoid.",
                difficulty: "easy",
                equipment: "weight plate",
                type: "isolation"
            },
            {
                name: "Face Pulls",
                description: "A shoulder and upper back exercise done with cables, targeting the rear delts and traps.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "isolation"
            }
        ],

        [
            {
                name: "Tricep Pushdown",
                description: "A staple isolation movement performed with a cable machine. Push the handle down to fully contract the triceps.",
                difficulty: "easy",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Close-Grip Bench Press",
                description: "A variation of the bench press that emphasizes triceps by keeping the hands closer together on the bar.",
                difficulty: "medium",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Overhead Dumbbell Extension",
                description: "Performed sitting or standing, this exercise stretches the triceps by lowering a dumbbell behind the head and extending up.",
                difficulty: "medium",
                equipment: "dumbbell",
                type: "isolation"
            },
            {
                name: "Skull Crushers",
                description: "An isolation movement performed lying down, extending a barbell or EZ-bar from forehead level upward.",
                difficulty: "medium",
                equipment: "EZ-bar or barbell",
                type: "isolation"
            },
            {
                name: "Dips (Triceps Focus)",
                description: "Done with an upright torso to target the triceps. Can be bodyweight or weighted for difficulty.",
                difficulty: "hard",
                equipment: "dip bars",
                type: "compound"
            },
            {
                name: "Kickbacks",
                description: "A focused tricep movement performed by extending the arms back while holding dumbbells.",
                difficulty: "easy",
                equipment: "dumbbells",
                type: "isolation"
            },
            {
                name: "Cable Overhead Extension",
                description: "A cable variation of the overhead tricep extension for constant resistance throughout the range.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Bench Dips",
                description: "A bodyweight dip between two benches that challenges triceps. Add weight for intensity.",
                difficulty: "easy",
                equipment: "bench",
                type: "compound"
            },
            {
                name: "Diamond Push-Ups",
                description: "A push-up variation with hands close together forming a diamond shape, heavily targeting the triceps.",
                difficulty: "medium",
                equipment: "bodyweight",
                type: "compound"
            },
            {
                name: "Barbell JM Press",
                description: "A hybrid between a close-grip bench and a skull crusher to overload the triceps safely.",
                difficulty: "hard",
                equipment: "barbell",
                type: "compound"
            }
        ],

        [
            {
                name: "Deadlift",
                description: "A full-body strength movement that heavily engages the entire back, glutes, and hamstrings.",
                difficulty: "hard",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Pull-Ups",
                description: "Bodyweight pulling movement that targets lats and upper back. Can be weighted for difficulty.",
                difficulty: "hard",
                equipment: "pull-up bar",
                type: "compound"
            },
            {
                name: "Barbell Rows",
                description: "A rowing exercise done with a barbell to develop thickness and strength in the back.",
                difficulty: "medium",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Lat Pulldown",
                description: "A cable-based machine exercise that mimics the pull-up, great for building lat width.",
                difficulty: "easy",
                equipment: "machine",
                type: "compound"
            },
            {
                name: "Seated Cable Row",
                description: "Targets the mid-back by pulling a cable attachment toward the torso while seated.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "compound"
            },
            {
                name: "T-Bar Row",
                description: "A powerful rowing variation that uses a landmine setup to train the upper back.",
                difficulty: "hard",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Face Pulls",
                description: "Works rear delts and upper back. Performed with a rope on a cable machine.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Straight Arm Pulldown",
                description: "An isolation movement that trains the lats through shoulder extension using a cable.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Machine Row",
                description: "A back-friendly rowing variation using a machine for stable resistance.",
                difficulty: "easy",
                equipment: "machine",
                type: "compound"
            },
            {
                name: "Inverted Row",
                description: "A bodyweight horizontal pulling movement performed under a bar or suspension trainer.",
                difficulty: "medium",
                equipment: "bodyweight",
                type: "compound"
            }
        ],

        [
            {
                name: "Barbell Curl",
                description: "The fundamental curling movement using a barbell to develop biceps mass.",
                difficulty: "medium",
                equipment: "barbell",
                type: "isolation"
            },
            {
                name: "Hammer Curl",
                description: "Targets both the biceps and brachialis by holding dumbbells with a neutral grip.",
                difficulty: "easy",
                equipment: "dumbbells",
                type: "isolation"
            },
            {
                name: "Preacher Curl",
                description: "Done seated on a preacher bench, isolating the biceps and minimizing momentum.",
                difficulty: "medium",
                equipment: "EZ-bar or dumbbells",
                type: "isolation"
            },
            {
                name: "Concentration Curl",
                description: "Performed seated, focusing on strict form to isolate the biceps muscle.",
                difficulty: "medium",
                equipment: "dumbbell",
                type: "isolation"
            },
            {
                name: "Cable Curl",
                description: "Uses a cable machine for constant tension through the entire curl movement.",
                difficulty: "easy",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Incline Dumbbell Curl",
                description: "Performed lying back on an incline bench to stretch the biceps at the start of the curl.",
                difficulty: "medium",
                equipment: "dumbbells",
                type: "isolation"
            },
            {
                name: "Zottman Curl",
                description: "Combines a regular curl and a reverse curl in one motion to target both heads and forearms.",
                difficulty: "hard",
                equipment: "dumbbells",
                type: "isolation"
            },
            {
                name: "Reverse Curl",
                description: "Targets the brachialis and forearms with an overhand grip.",
                difficulty: "medium",
                equipment: "barbell or EZ-bar",
                type: "isolation"
            },
            {
                name: "21s",
                description: "A technique combining partial and full reps to create a biceps burn. Usually done with a barbell.",
                difficulty: "hard",
                equipment: "barbell or EZ-bar",
                type: "isolation"
            },
            {
                name: "Machine Bicep Curl",
                description: "Performed on a seated machine to isolate the biceps with controlled motion.",
                difficulty: "easy",
                equipment: "machine",
                type: "isolation"
            }
        ],

        [
            {
                name: "Crunches",
                description: "A simple bodyweight movement targeting the upper abdominal muscles.",
                difficulty: "easy",
                equipment: "bodyweight",
                type: "isolation"
            },
            {
                name: "Plank",
                description: "An isometric hold that trains the core and stabilizers through total body tension.",
                difficulty: "medium",
                equipment: "bodyweight",
                type: "isolation"
            },
            {
                name: "Leg Raises",
                description: "Targets the lower abs by lifting the legs while lying on your back.",
                difficulty: "medium",
                equipment: "bodyweight",
                type: "isolation"
            },
            {
                name: "Hanging Leg Raises",
                description: "An advanced core movement performed while hanging from a bar.",
                difficulty: "hard",
                equipment: "pull-up bar",
                type: "isolation"
            },
            {
                name: "Russian Twists",
                description: "Trains the obliques through a rotational movement, often with a weight plate or medicine ball.",
                difficulty: "medium",
                equipment: "bodyweight or weight",
                type: "isolation"
            },
            {
                name: "Cable Crunches",
                description: "A resistance-based crunch performed on a cable machine while kneeling.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Mountain Climbers",
                description: "A dynamic movement to activate the core and get the heart rate up.",
                difficulty: "medium",
                equipment: "bodyweight",
                type: "isolation"
            },
            {
                name: "V-Ups",
                description: "Combines a leg raise and crunch by lifting both the legs and torso simultaneously.",
                difficulty: "hard",
                equipment: "bodyweight",
                type: "isolation"
            },
            {
                name: "Ab Wheel Rollouts",
                description: "A challenging movement using a wheel to extend the body and activate the entire core.",
                difficulty: "hard",
                equipment: "ab wheel",
                type: "isolation"
            },
            {
                name: "Toe Touches",
                description: "Targets upper and lower abs by reaching toward the toes with both hands.",
                difficulty: "easy",
                equipment: "bodyweight",
                type: "isolation"
            }
        ],

        [
            {
                name: "Back Squat",
                description: "A foundational strength exercise targeting the quads, glutes, and core.",
                difficulty: "hard",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Front Squat",
                description: "Shifts the load to emphasize the quads and requires greater core stability.",
                difficulty: "hard",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Leg Press",
                description: "A machine-based compound movement that isolates the legs with heavy weight.",
                difficulty: "medium",
                equipment: "machine",
                type: "compound"
            },
            {
                name: "Lunges",
                description: "A unilateral leg exercise that targets the quads and glutes.",
                difficulty: "medium",
                equipment: "bodyweight or dumbbells",
                type: "compound"
            },
            {
                name: "Step-Ups",
                description: "Performed on a box or bench, works the quads and balance.",
                difficulty: "medium",
                equipment: "bodyweight or dumbbells",
                type: "compound"
            },
            {
                name: "Bulgarian Split Squat",
                description: "An advanced lunge variation with one foot elevated behind you.",
                difficulty: "hard",
                equipment: "dumbbells",
                type: "compound"
            },
            {
                name: "Sissy Squat",
                description: "An old-school quad isolating movement that heavily stretches the front thigh.",
                difficulty: "hard",
                equipment: "bodyweight or machine",
                type: "isolation"
            },
            {
                name: "Goblet Squat",
                description: "A squat variation holding a dumbbell at the chest for beginners or warmups.",
                difficulty: "easy",
                equipment: "dumbbell",
                type: "compound"
            },
            {
                name: "Wall Sit",
                description: "An isometric quad hold performed against a wall to build endurance.",
                difficulty: "medium",
                equipment: "bodyweight",
                type: "isolation"
            },
            {
                name: "Leg Extension",
                description: "A machine-based exercise that isolates and burns the quads directly.",
                difficulty: "easy",
                equipment: "machine",
                type: "isolation"
            }
        ],

        [
            {
                name: "Hip Thrust",
                description: "A glute-focused compound movement performed by thrusting hips upward with shoulders supported.",
                difficulty: "medium",
                equipment: "barbell or dumbbell",
                type: "compound"
            },
            {
                name: "Glute Bridge",
                description: "A bodyweight movement that activates the glutes by pushing hips upward while lying on the floor.",
                difficulty: "easy",
                equipment: "bodyweight",
                type: "compound"
            },
            {
                name: "Romanian Deadlift",
                description: "Focuses on the hamstrings and glutes through a hip hinge motion.",
                difficulty: "medium",
                equipment: "barbell or dumbbells",
                type: "compound"
            },
            {
                name: "Step-Ups",
                description: "Climbing onto a box or bench emphasizes the glutes and quads.",
                difficulty: "medium",
                equipment: "bodyweight or dumbbells",
                type: "compound"
            },
            {
                name: "Cable Kickbacks",
                description: "An isolation movement for glutes using a cable machine and ankle strap.",
                difficulty: "medium",
                equipment: "cable machine",
                type: "isolation"
            },
            {
                name: "Kettlebell Swings",
                description: "A dynamic exercise that works the hips, glutes, and core.",
                difficulty: "medium",
                equipment: "kettlebell",
                type: "compound"
            },
            {
                name: "Sumo Deadlift",
                description: "A wide-stance deadlift that emphasizes glutes and inner thighs.",
                difficulty: "hard",
                equipment: "barbell",
                type: "compound"
            },
            {
                name: "Lateral Band Walks",
                description: "Uses a resistance band around the legs to train glute medius.",
                difficulty: "easy",
                equipment: "resistance band",
                type: "isolation"
            },
            {
                name: "Donkey Kicks",
                description: "A bodyweight movement on all fours to isolate the glutes.",
                difficulty: "easy",
                equipment: "bodyweight",
                type: "isolation"
            },
            {
                name: "Frog Pumps",
                description: "A glute burnout exercise with feet together and knees out, thrusting hips upward.",
                difficulty: "easy",
                equipment: "bodyweight",
                type: "isolation"
            }
        ]
    ]
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
    if (!localStorage['logged-users']) {
        localStorage['logged-users'] = '[]';
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
    USER_ELEMENTS.loggedUsers = JSON.parse(localStorage['logged-users']);
}
loadFromLS();

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
 * Updates hydration
*/
function updateHydration() {
    if (!isToday(new Date(`${SETTINGS.lastUpdate.month}.${SETTINGS.lastUpdate.date}.${SETTINGS.lastUpdate.year}`))) {
        DRINK_LOG_ELEMENTS.goal = 0;
        DRINK_LOG_ELEMENTS.reached = 0;

        saveDataOnLS('hydration-reached', DRINK_LOG_ELEMENTS.reached)
        saveDataOnLS('hydration-goal', DRINK_LOG_ELEMENTS.goal)
    }
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
/**
 * Hash algorithm for the password
 * @param {string} str String to hash
 * @returns {string} Hashed string
 * 
 * This code is from ChatGPT
 */
async function hashStringSHA256(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function getHash(str) {
    return await hashStringSHA256(str)
}