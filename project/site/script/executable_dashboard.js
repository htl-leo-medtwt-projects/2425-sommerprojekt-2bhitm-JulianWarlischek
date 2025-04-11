/**
 * Function to style the GUI
 * 
 * TRAINING SESSION
 */
function updateGUITS() {
    const trainings_left = document.getElementById('completed-sessions-trainings-left');

    trainings_left.innerHTML = `${CALENDAR_ELEMENTS.sessionsCompleted} out of ${CALENDAR_ELEMENTS.sessionsToComplete}`

    const diagrammVS = document.getElementById('diagramm-content')

    diagrammVS.style.transform = `translateX(${calcPercent()}%)`
}
updateGUITS()

/**
 * Function to calculate the position of the diagramm
 */
function calcPercent() {
    let percent = -100;
    if (CALENDAR_ELEMENTS.sessionsToComplete === 0) {
        return percent;
    }

    percent = ((CALENDAR_ELEMENTS.sessionsCompleted / CALENDAR_ELEMENTS.sessionsToComplete) * 100) - 100;

    return percent;
}