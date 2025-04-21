/**
 * Chart.js
 */
const ctx = document.getElementById('completed-sessions-chart-canvas')
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: initChart(),
    datasets: [{
      data: getSessionsComplete(CALENDAR_ELEMENTS.lastSevDaysChartData),
      borderColor: '#D7D1FF',
      backgroundColor: '#D7D1FF',
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,  // Blendet die Legende aus
      },
      tooltip: {
        enabled: false  // Blendet die Tooltips aus
      }
    },
    scales: {
      x: {
        display: false,  // Blendet die X-Achse aus (inkl. Labels und Ticks)
        grid: {
          display: false  // Blendet die X-Achsen-Gitterlinien aus
        }
      },
      y: {
        display: false,  // Blendet die Y-Achse aus (inkl. Labels und Ticks)
        grid: {
          display: false  // Blendet die Y-Achsen-Gitterlinien aus
        }
      }
    }
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


  return labels;
}

/**
 * Formats the date into a customized format
 */
function getFormatedDate(date) {
  let stringRepMonth = CALENDAR_ELEMENTS.month[date.getMonth()];
  let stringRepDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

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
 * Function to style the GUI
 * 
 * CALORIES
 */
function updateGUICAL() {
  const num = document.getElementById('dashboard-item-cal-burned-num');
  num.innerHTML = LIVE_SESSION_ELEMENTS.caloriesBurnedTotal.toFixed(1) + " cal";

  if (LIVE_SESSION_ELEMENTS.caloriesBurnedTotal > LIVE_SESSION_ELEMENTS.caloriesBurnedLastMeasure) {
    setCalState(0);
  } else {
    setCalState(1);
  }
}
updateGUICAL()

/**
 * Function to set the state of the comparison
 */
function setCalState(state) {
  const arrow = document.getElementById('comparison-arrow');
  const text = document.getElementById('comparison-text');

  arrow.innerHTML = LIVE_SESSION_ELEMENTS.stateArrows[state];

  arrow.style.color = state == 0 ? 'green' : 'red';

  text.innerHTML = `${state == 0 ? 'Better' : 'Worse'} than the last measure.`
}

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

/**
 * Filters the integer values essential for the data
 */
function getSessionsComplete(arr) {
  let values = []
  for (let i = arr.length - 1; i >= 0; i--) {
    values.push(arr[i].sessionsCompleted);
  }
  return values;
}