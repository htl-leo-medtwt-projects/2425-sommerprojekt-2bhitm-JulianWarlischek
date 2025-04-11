/**
 * Chart.js
 */
const ctx = document.getElementById('completed-sessions-chart-canvas')
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: initChart(),
    }
});

/**
 * Inits the chart on the index.html page
 */
function initChart() {
    let labels = [];

    for (let i = 0; i < CALENDAR_ELEMENTS.lastSevDaysChartData.length; i++) {
        labels.push(getFormatedDate(CALENDAR_ELEMENTS.lastSevDaysChartData[i].date))
    }

    console.log(labels);
    

    return labels;
}

/**
 * Formats the date into a customized format
 */
function getFormatedDate(date) {
    console.log(date);
    
    let stringRepMonth = CALENDAR_ELEMENTS.month[date.getMonth()];
    let stringRepDate = date.getDate();

    return `${stringRepMonth}. ${stringRepDate}`
}

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