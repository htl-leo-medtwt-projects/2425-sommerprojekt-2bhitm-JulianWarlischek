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
        activeOnDevice: false,
        level: 1,
        levelMaxPoints: 20,
        points: 0,
        pointsPerLevel: 20,
        exerciseTimeOut: undefined,
        exerciseOpen: false
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
            "recommendedExercises": ["Bench Press", "Push-Up", "Incline Dumbbell Press"],
            'previewImg': "../../images/chest.webp"
        },
        {
            "id": 2,
            "src": "../../images/muscles/shoulders.png",
            "name": "Shoulders",
            "description": "The shoulders are a complex joint that allows for a wide range of motion. They are made up of several muscles, including the deltoids and rotator cuff muscles, which are essential for overhead movements and stability.",
            "recommendedExercises": ["Overhead Press", "Lateral Raise", "Face Pulls"],
            'previewImg': "../../images/shoulders.webp"
        },
        {
            "id": 3,
            "src": "../../images/muscles/triceps.png",
            "name": "Triceps",
            "description": "The triceps are the muscles located at the back of the upper arm. They are responsible for extending the elbow joint and play a crucial role in pushing movements, such as bench presses and push-ups.",
            "recommendedExercises": ["Triceps Dips", "Skull Crushers", "Close-Grip Bench Press"],
            'previewImg': "../../images/triceps.jpg"
        },
        {
            "id": 4,
            "src": "../../images/muscles/back.png",
            "name": "Back",
            "description": "The back muscles, including the latissimus dorsi and trapezius, are responsible for pulling movements and play a crucial role in maintaining good posture. They are involved in exercises like pull-ups and rows.",
            "recommendedExercises": ["Pull-Up", "Barbell Row", "Deadlift"],
            'previewImg': "../../images/back.jpg"
        },
        {
            "id": 5,
            "src": "../../images/muscles/biceps.png",
            "name": "Biceps",
            "description": "The biceps are the muscles located at the front of the upper arm. They are responsible for flexing the elbow joint and play a crucial role in pulling movements, such as curls and pull-ups.",
            "recommendedExercises": ["Barbell Curl", "Hammer Curl", "Chin-Up"],
            'previewImg': "../../images/biceps.jpg"
        },
        {
            "id": 6,
            "src": "../../images/muscles/core.png",
            "name": "Core",
            "description": "The core muscles include the abdominal muscles, obliques, and lower back muscles. They are responsible for stabilizing the spine and pelvis and play a crucial role in maintaining good posture and balance.",
            "recommendedExercises": ["Plank", "Russian Twist", "Leg Raise"],
            'previewImg': "../../images/abs.jpg"
        },
        {
            "id": 7,
            "src": "../../images/muscles/quads.png",
            "name": "Quadriceps",
            "description": "The quadriceps, or quads, are a group of muscles located at the front of the thigh. They are responsible for extending the knee and play a crucial role in activities like squatting and jumping.",
            "recommendedExercises": ["Squat", "Leg Press", "Lunge"],
            'previewImg': "../../images/legs.webp"
        },
        {
            "id": 8,
            "src": "../../images/muscles/glutes.png",
            "name": "Glutes",
            "description": "The glutes, or gluteal muscles, are located in the buttocks and are responsible for hip extension, abduction, and external rotation. They play a crucial role in movements like squats, lunges, and running.",
            "recommendedExercises": ["Hip Thrust", "Glute Bridge", "Bulgarian Split Squat"],
            'previewImg': "../../images/glutes.webp"
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
        // Chest
        [
            {
                name: "Bench Press",
                description: "Classic chest exercise using a barbell.",
                targetMuscle: "Chest",
                difficulty: 6,
                src: "../../images/exercises/barbell-bench-press.jpg"
            },
            {
                name: "Push-Up",
                description: "Bodyweight chest exercise.",
                targetMuscle: "Chest",
                difficulty: 3,
                src: "../../images/exercises/push ups.jpeg"
            },
            {
                name: "Incline Dumbbell Press",
                description: "Chest press on an incline bench to target upper pectorals.",
                targetMuscle: "Chest",
                difficulty: 5,
                src: "../../images/exercises/incline-dumbbell-press.jpg"
            },
            {
                name: "Decline Bench Press",
                description: "Targets the lower part of the chest with a downward angle.",
                targetMuscle: "Chest",
                difficulty: 6,
                src: "../../images/exercises/decline-bench-press.jpg"
            },
            {
                name: "Chest Fly",
                description: "Isolates the pectorals using dumbbells or cables.",
                targetMuscle: "Chest",
                difficulty: 4,
                src: "../../images/exercises/chest-fly.jpg"
            },
            {
                name: "Cable Crossover",
                description: "Excellent isolation movement for full chest contraction.",
                targetMuscle: "Chest",
                difficulty: 5,
                src: "../../images/exercises/cable-crossover.webp"
            },
            {
                name: "Dumbbell Pullover",
                description: "Stretches and works the chest and lats.",
                targetMuscle: "Chest",
                difficulty: 5,
                src: "../../images/exercises/dumbbell-pullover.gif"
            },
            {
                name: "Svend Press",
                description: "A plate press to target the inner chest.",
                targetMuscle: "Chest",
                difficulty: 4,
                src: "../../images/exercises/svend-press.webp"
            },
            {
                name: "Landmine Press",
                description: "Angled barbell press that targets the upper chest.",
                targetMuscle: "Chest",
                difficulty: 6,
                src: "../../images/exercises/landmine-press.jpg"
            },
        ],
        [
            // Shoulders
            {
                name: "Overhead Press",
                description: "Shoulder pressing movement with a barbell.",
                targetMuscle: "Shoulders",
                difficulty: 6,
                src: "../../images/exercises/overhead-press.webp"
            },
            {
                name: "Lateral Raise",
                description: "Isolates the lateral deltoids.",
                targetMuscle: "Shoulders",
                difficulty: 4,
                src: "../../images/exercises/lateral-raises.jpg"
            },
            {
                name: "Front Raise",
                description: "Targets the anterior deltoid using dumbbells or cables.",
                targetMuscle: "Shoulders",
                difficulty: 4,
                src: "../../images/exercises/front-raises.gif"
            },
            {
                name: "Arnold Press",
                description: "Dumbbell press variation that engages all heads of the deltoid.",
                targetMuscle: "Shoulders",
                difficulty: 7,
                src: "../../images/exercises/arnold-press.jpg"
            },
            {
                name: "Face Pulls",
                description: "Good for rear deltoid and posture.",
                targetMuscle: "Shoulders",
                difficulty: 5,
                src: "../../images/exercises/face-pulls.webp"
            },
            {
                name: "Reverse Fly",
                description: "Works the rear delts and upper back.",
                targetMuscle: "Shoulders",
                difficulty: 5,
                src: "../../images/exercises/reverse-fly.jpg"
            },
            {
                name: "Cable Lateral Raise",
                description: "Constant tension on the lateral deltoid.",
                targetMuscle: "Shoulders",
                difficulty: 5,
                src: "../../images/exercises/cable-lateral-raises.webp"
            },
            {
                name: "Seated Dumbbell Press",
                description: "Stabilized version of shoulder press.",
                targetMuscle: "Shoulders",
                difficulty: 5,
                src: "../../images/exercises/seated-dumbell-press.jpg"
            },
            {
                name: "Z Press",
                description: "Overhead press performed seated on the floor to target stability.",
                targetMuscle: "Shoulders",
                difficulty: 8,
                src: "../../images/exercises/z-press.webp"
            },
            {
                name: "Upright Row",
                description: "Pulls weight to chest height to target shoulders and traps.",
                targetMuscle: "Shoulders",
                difficulty: 5,
                src: "../../images/exercises/upright-row.webp"
            },
        ],
        [

            // Triceps
            {
                name: "Triceps Dips",
                description: "Bodyweight triceps exercise.",
                targetMuscle: "Triceps",
                difficulty: 5,
                src: "../../images/exercises/triceps-dips.webp"
            },
            {
                name: "Skull Crushers",
                description: "Isolated triceps exercise with barbell or dumbbells.",
                targetMuscle: "Triceps",
                difficulty: 6,
                src: "../../images/exercises/skull-crushers.jpg"
            },
            {
                name: "Close-Grip Bench Press",
                description: "Bench press variation focusing on triceps.",
                targetMuscle: "Triceps",
                difficulty: 6,
                src: "../../images/exercises/close-grip-bench-press.webp"
            },
            {
                name: "Triceps Kickback",
                description: "Isolation exercise with dumbbells.",
                targetMuscle: "Triceps",
                difficulty: 4,
                src: "../../images/exercises/triceps-kickbacks.webp"
            },
            {
                name: "Overhead Triceps Extension",
                description: "Targets the long head of the triceps.",
                targetMuscle: "Triceps",
                difficulty: 5,
                src: "../../images/exercises/overhead-triceps-extensions.webp"
            },
            {
                name: "Cable Pushdown",
                description: "Popular isolation movement for the triceps.",
                targetMuscle: "Triceps",
                difficulty: 3,
                src: "../../images/exercises/cable-pushdown.webp"
            },
            {
                name: "Diamond Push-Up",
                description: "Push-up variation focused on triceps.",
                targetMuscle: "Triceps",
                difficulty: 5,
                src: "../../images/exercises/diamond-push-up.webp"
            },
            {
                name: "JM Press",
                description: "Hybrid between skull crusher and press.",
                targetMuscle: "Triceps",
                difficulty: 7,
                src: "../../images/exercises/jm-press.gif"
            },
            {
                name: "Tate Press",
                description: "Uncommon but effective triceps isolation.",
                targetMuscle: "Triceps",
                difficulty: 6,
                src: "../../images/exercises/tate-press.jpg"
            },
        ],
        [
            // Back
            {
                name: "Pull-Up",
                description: "Bodyweight exercise for back and biceps.",
                targetMuscle: "Back",
                difficulty: 7,
                src: "../../images/exercises/pull-up.webp"
            },
            {
                name: "Barbell Row",
                description: "Back exercise pulling weight to torso.",
                targetMuscle: "Back",
                difficulty: 6,
                src: "../../images/exercises/barbell-row.jpg"
            },
            {
                name: "Deadlift",
                description: "Full-body compound lift with emphasis on back and legs.",
                targetMuscle: "Back",
                difficulty: 9,
                src: "../../images/exercises/deadlift.webp"
            },
            {
                name: "Lat Pulldown",
                description: "Cable-based vertical pulling movement.",
                targetMuscle: "Back",
                difficulty: 4,
                src: "../../images/exercises/lat-pulldown.jpg"
            },
            {
                name: "Seated Cable Row",
                description: "Horizontal pulling movement for the back.",
                targetMuscle: "Back",
                difficulty: 5,
                src: "../../images/exercises/seated-cable-row.jpeg"
            },
            {
                name: "T-Bar Row",
                description: "Rowing movement with a landmine barbell setup.",
                targetMuscle: "Back",
                difficulty: 6,
                src: "../../images/exercises/t-bar-row.jpg"
            },
            {
                name: "Face Pull",
                description: "Great for upper traps and rear delts.",
                targetMuscle: "Back",
                difficulty: 5,
                src: "../../images/exercises/face-pull.webp"
            },
            {
                name: "Dumbbell Row",
                description: "Single-arm rowing movement.",
                targetMuscle: "Back",
                difficulty: 5,
                src: "../../images/exercises/dumbell-row.webp"
            },
            {
                name: "Inverted Row",
                description: "Bodyweight rowing movement using a bar.",
                targetMuscle: "Back",
                difficulty: 4,
                src: "../../images/exercises/inverted-row.jpg"
            },
        ],
        [

            // Biceps
            {
                name: "Barbell Curl",
                description: "Basic biceps curling exercise.",
                targetMuscle: "Biceps",
                difficulty: 4,
                src: "../../images/exercises/barbell-curl.webp"
            },
            {
                name: "Hammer Curl",
                description: "Neutral grip curl for brachialis and biceps.",
                targetMuscle: "Biceps",
                difficulty: 3,
                src: "../../images/exercises/hammer-curl.webp"
            },
            {
                name: "Chin-Up",
                description: "Pull-up variation using underhand grip.",
                targetMuscle: "Biceps",
                difficulty: 6,
                src: "../../images/exercises/chin-up.webp"
            },
            {
                name: "Concentration Curl",
                description: "Seated single-arm isolation curl.",
                targetMuscle: "Biceps",
                difficulty: 4,
                src: "../../images/exercises/concentration-curl.webp"
            },
            {
                name: "Preacher Curl",
                description: "Biceps curl supported by preacher bench.",
                targetMuscle: "Biceps",
                difficulty: 5,
                src: "../../images/exercises/preacher-curl.webp"
            },
            {
                name: "Cable Curl",
                description: "Constant tension throughout the movement.",
                targetMuscle: "Biceps",
                difficulty: 4,
                src: "../../images/exercises/cable-curl.webp"
            },
            {
                name: "Zottman Curl",
                description: "Combines regular and reverse curls.",
                targetMuscle: "Biceps",
                difficulty: 6,
                src: "../../images/exercises/zottman-curl.jpg"
            },
            {
                name: "Incline Dumbbell Curl",
                description: "Curl performed seated with arms hanging back.",
                targetMuscle: "Biceps",
                difficulty: 5,
                src: "../../images/exercises/incline-dumbbell-curl.webp"
            },
            {
                name: "Drag Curl",
                description: "Variation with minimal shoulder movement.",
                targetMuscle: "Biceps",
                difficulty: 4,
                src: "../../images/exercises/drag-curl.jpg"
            },
            {
                name: "Reverse Curl",
                description: "Targets brachialis and forearms.",
                targetMuscle: "Biceps",
                difficulty: 5,
                src: "../../images/exercises/reverse-curl.jpg"
            },
        ],
        [
            // Core
            {
                name: "Plank",
                description: "Core stability hold.",
                targetMuscle: "Core",
                difficulty: 4,
                src: "../../images/exercises/plank.webp"
            },
            {
                name: "Russian Twist",
                description: "Rotational core exercise.",
                targetMuscle: "Core",
                difficulty: 5,
                src: "../../images/exercises/russian-twist.webp"
            },
            {
                name: "Leg Raise",
                description: "Abdominal exercise performed lying down.",
                targetMuscle: "Core",
                difficulty: 6,
                src: "../../images/exercises/leg-raise.jpg"
            },
            {
                name: "Crunch",
                description: "Basic abdominal contraction exercise.",
                targetMuscle: "Core",
                difficulty: 3,
                src: "../../images/exercises/crunch.jpg"
            },
            {
                name: "V-Up",
                description: "Advanced crunch where legs and torso meet.",
                targetMuscle: "Core",
                difficulty: 6,
                src: "../../images/exercises/v-up.gif"
            },
            {
                name: "Ab Wheel Rollout",
                description: "Challenging core stability movement.",
                targetMuscle: "Core",
                difficulty: 8,
                src: "../../images/exercises/ab-wheel-rollouts.jpg"
            },
        ],
        [

            // Quadriceps
            {
                name: "Squat",
                description: "Lower body compound exercise.",
                targetMuscle: "Quadriceps",
                difficulty: 7,
                src: "../../images/exercises/squat.jpg"
            },
            {
                name: "Leg Press",
                description: "Machine-based leg exercise.",
                targetMuscle: "Quadriceps",
                difficulty: 5,
                src: "../../images/exercises/leg-press.webp"
            },
            {
                name: "Lunge",
                description: "Leg exercise with forward step.",
                targetMuscle: "Quadriceps",
                difficulty: 6,
                src: "../../images/exercises/lunge.jpg"
            },
            {
                name: "Step-Up",
                description: "Step onto a platform to work quads and glutes.",
                targetMuscle: "Quadriceps",
                difficulty: 5,
                src: "../../images/exercises/step-up.webp"
            },
            {
                name: "Wall Sit",
                description: "Isometric hold to burn out quads.",
                targetMuscle: "Quadriceps",
                difficulty: 5,
                src: "../../images/exercises/wall-sit.gif"
            },
            {
                name: "Bulgarian Split Squat",
                description: "Single-leg squat variation.",
                targetMuscle: "Quadriceps",
                difficulty: 7,
                src: "../../images/exercises/bulgarian-split-squat.jpg"
            },
            {
                name: "Front Squat",
                description: "Barbell held in front rack to emphasize quads.",
                targetMuscle: "Quadriceps",
                difficulty: 8,
                src: "../../images/exercises/front-squat.jpg"
            },
            {
                name: "Sissy Squat",
                description: "Bodyweight movement isolating the quads.",
                targetMuscle: "Quadriceps",
                difficulty: 7,
                src: "../../images/exercises/sissy-squat.webp"
            },
            {
                name: "Leg Extension",
                description: "Machine-based quad isolation.",
                targetMuscle: "Quadriceps",
                difficulty: 4,
                src: "../../images/exercises/leg-extension.gif"
            }
        ],
        [
            // Glutes
            {
                name: "Hip Thrust",
                description: "Glute-focused movement using a bench.",
                targetMuscle: "Glutes",
                difficulty: 5,
                src: "../../images/exercises/hip-thrust.jpg"
            },
            {
                name: "Glute Bridge",
                description: "Bodyweight glute exercise.",
                targetMuscle: "Glutes",
                difficulty: 4,
                src: "../../images/exercises/glute-bridge.jpg"
            },
            {
                name: "Cable Kickback",
                description: "Isolated glute activation using cables.",
                targetMuscle: "Glutes",
                difficulty: 5,
                src: "../../images/exercises/cable-kickbacks.jpg"
            },
            {
                name: "Kettlebell Swing",
                description: "Explosive hip hinge movement.",
                targetMuscle: "Glutes",
                difficulty: 6,
                src: "../../images/exercises/kettlebell-swings.gif"
            },
            {
                name: "Sumo Deadlift",
                description: "Deadlift variation targeting inner thighs and glutes.",
                targetMuscle: "Glutes",
                difficulty: 8,
                src: "../../images/exercises/sumo-deadlift.jpg"
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