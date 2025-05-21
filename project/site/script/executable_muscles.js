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

    databox.innerHTML = `
    <div id="option-box">
        <div class="option-box-item" onclick="loadExerciseList()">
            <h4>Exercises</h4>
        </div>
        <div class="option-box-item" onclick="loadLearnAbout()">
            <h4>Learn about</h4>
        </div>
    </div>
    `
}

function loadLearnAbout() {
    const databox = document.getElementById('data-box');

    let tempString = "";

    tempString = `
    <div id="learn-about-box">
        <h4>Learn about</h4>
        <h2>${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].name}</h2>
        <p>${MUSCLE_ELEMENTS.muscles[MUSCLE_ELEMENTS.muscleSelected].description}</p>
        <h5>Recommended exercises: </h5>
        <div id="recommended-exercises">
        `
    for (let i = 0; i < MUSCLE_ELEMENTS.diffColors.length; i++) {
        
    }

    tempString += `
    </div>
    </div>
    `

}