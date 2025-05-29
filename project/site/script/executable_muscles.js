/**
 * Settings of muscles.html
 */
function loadMuscleSettings() {
    SETTINGS.path = MUSCLE_ELEMENTS.upperSite;
    SETTINGS.userImgPath = MUSCLE_ELEMENTS.userImgPath;
}
loadMuscleSettings()

/**
 * Load the muscle navigation
 */
function loadMuscleNavigation() {
    const databox = document.getElementById('muscle-navigation-inner');
    let tempString = "";

    for (let i = 0; i < MUSCLE_ELEMENTS.muscles.length; i++) {
        tempString += `
        <div class="muscle-navigation-item" onclick="selectThisMuscle(this)">
            <img src="${MUSCLE_ELEMENTS.muscles[i].src}" class="muscle-img">
        </div>
        `
    }
    databox.innerHTML = tempString;
}
loadMuscleNavigation();

function selectThisMuscle(element) {
    clearSelectedMuscle();
    element.style.border = "2px solid white";

    let index = Array.from(element.parentNode.children).indexOf(element);

    MUSCLE_ELEMENTS.muscleSelected = index;
    setOption()
}

function clearSelectedMuscle() {
    const elements = document.getElementsByClassName('muscle-navigation-item');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "2px solid transparent";

    }
}

function loadExerciseList() {
    const databox = document.getElementById('exercise-list-inner');
    let tempString = "";

    for (let i = 0; i < MUSCLE_ELEMENTS.muscleSelected.exercises.length; i++) {
        tempString += `
        <div class="exercise-list-item" onclick="loadExercise(this)">
            <img src="${MUSCLE_ELEMENTS.muscleSelected.exercises[i].src}" class="exercise-img">
        </div>
        `
    }
    databox.innerHTML = tempString;
}

function setOption() {
    const databox = document.getElementById('data-box');

    let tempString = ""

    tempString =
        `<div id="option-box">
        <div class="option-box-item" onclick="loadExerciseList()">
            <div class="option-overlay"></div>
            <h4>Exercises</h4>
            <p>Exercises to train the muscle.</p>
        </div>
        <div class="option-box-item" onclick="loadLearnAbout()" style="background-image: url('${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].previewImg}');">
            <div class="option-overlay"></div>
            <h4>Learn about</h4>
            <p>Learn about the muscle.</p>
        </div>
    </div>
    `

    databox.innerHTML = tempString.trim();
}

function loadLearnAbout() {
    const databox = document.getElementById('data-box');

    let tempString = "";

    tempString = `
    <div id="learn-about-box">
        <h4>Learn about - ${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].name}</h4>
        <h2>${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].name}</h2>
        <p>${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].description}</p>
        <hr class="seperator-line">
        <div class="muscle-img">
            <img src="${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].src}" alt="${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].name}">
        </div>
        <hr class="seperator-line">

        <h5>Recommended exercises: </h5>
        <div id="recommended-exercises">
        `
    for (let i = 0; i < MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].recommendedExercises.length; i++) {
        tempString += `
        <div class="recommended-exercise-item" onclick="loadExercise(${i})">
            <h3>${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].recommendedExercises[i]}</h3>
        </div>
        `
    }

    tempString += `
    </div>
    </div>
    `


    databox.innerHTML = tempString;
}

function loadExerciseList() {
    const databox = document.getElementById('data-box');
    let tempString = `<div id='exercise-list-box'><h4>Exercises - ${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].name}</h4>`;

    for (let i = 0; i < MUSCLE_ELEMENTS.exercises[MUSCLE_ELEMENTS.muscleSelected].length; i++) {
        tempString += `
        <div class="exercise-list-item" onclick="loadExercise(${i})">
            <h4>${MUSCLE_ELEMENTS.exercises[MUSCLE_ELEMENTS.muscleSelected][i].name}</h4>
        </div>
        `
    }

    tempString += `
    </div>
    `

    databox.innerHTML = tempString;
}

function loadExercise(index, fromAll = false) {
    let databox = document.getElementById('data-box');

    let tempString = `<div id="exercise-box"><h4>Exercise - ${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].name}</h4>`

    tempString +=
        `<div>
    <h2>${MUSCLE_ELEMENTS.exercises[MUSCLE_ELEMENTS.muscleSelected][index].name}</h2>
    <p>${MUSCLE_ELEMENTS.exercises[MUSCLE_ELEMENTS.muscleSelected][index].description}</p>
    <div id="exercise-difficulty-flex">
    `

    for (let i = 0; i < MUSCLE_ELEMENTS.diffColors.length; i++) {

        tempString += `<div style="opacity: 0.5;" class="difficulty-box"><div style="background-color: ${MUSCLE_ELEMENTS.diffColors[i]}"></div><p>${i + 1}</p></div>`
    }

    tempString += `</div><div class="exercise-img"><img src="${MUSCLE_ELEMENTS.exercises[MUSCLE_ELEMENTS.muscleSelected][index].src ? MUSCLE_ELEMENTS.exercises[MUSCLE_ELEMENTS.muscleSelected][index].src : ""}"></div></div>${fromAll ? `<div id="exercise-back-button" onclick="loadAllExercises()">Back</div>` : ""}</div>`

    databox.innerHTML = tempString;

    document.getElementsByClassName('difficulty-box')[MUSCLE_ELEMENTS.exercises[MUSCLE_ELEMENTS.muscleSelected][index].difficulty - 1].style.opacity = 1;
}

function loadAllExercises() {
    const databox = document.getElementById('data-box');
    let tempString = "<div id='exercise-list-box'><h4>Exercises</h4>";

    for (let i = 0; i < MUSCLE_ELEMENTS.exercises.length; i++) {
        for (let j = 0; j < MUSCLE_ELEMENTS.exercises[i].length; j++) {
            tempString += `
            <div class="exercise-list-item" onclick="MUSCLE_ELEMENTS.muscleSelected = ${i}; loadExercise(${j}, true)">
                <h4>${MUSCLE_ELEMENTS.exercises[i][j].name}</h4>
            </div>
            `
        }
    }
    tempString += `</div>`;
    databox.innerHTML = tempString;
}
loadAllExercises()