/**
 * Sortable.js
 */
new Sortable(document.getElementById('possible-sessions'), {
    animation: 150,
    swap: true,
    filter: ".seperation-line",
    onMove: function (evt) {
        return !evt.related.classList.contains('seperation-line');
    },
    onEnd: changeOrder
})

/**
 * Settings of live-session.html
 */
function loadLiveSessionSettings() {
    SETTINGS.path = LIVE_SESSION_ELEMENTS.upperSite;
    SETTINGS.userImgPath = LIVE_SESSION_ELEMENTS.userImgPath;
}
loadLiveSessionSettings()


/**
 * Function to print all sessions to the box (TODAY)
 * 
 * Very similar to the function @see printAllSessions()
 */
function printPossibleSessions() {
    const box = document.getElementById('possible-sessions');
    let temp_string = "";

    let items = CALENDAR_ELEMENTS.sessionsToday;

    for (let i = 0; i < items.length; i++) {
        temp_string += `
                <div id="" class="training-session possible-session ${i % 2 == 0 ? 'possible-session-left' : 'possible-session-right'}" style="background-color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].main}; color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].darkMain};" onclick="selectThisSessionToStart(${i})">
                    <div style="background-color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].darkMain}; color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].main}" class="possible-overlay ${i % 2 == 0 ? 'possible-overlay-right' : 'possible-overlay-left'}"><h4 class="possible-session-name">${CALENDAR_ELEMENTS.types[items[i].type].name} <br> <span class="click-hint">Click again to start!</span><h4></div>
                    <div class="session-header">
                        <div class="unit-icon" style="border:${CALENDAR_ELEMENTS.colorCodes[items[i].type].darkMain} 1px solid; color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].darkMain};">
                           ${CALENDAR_ELEMENTS.types[items[i].type].icon}
                        </div>
                    </div>
                    <div class="time-settings">
                        <div class="duration" style="background-color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].darkMain}; color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].main};">
                            <h5 class="this-duration">${(Math.floor((items[i].duration / 60)) <= 0 ? "" : Math.floor((items[i].duration / 60)) + " h ") + ((items[i].duration % 60) <= 0 ? "" : (items[i].duration % 60) + " min")}</h5>
                        </div>
                    </div>
                </div>
                ${i < items.length - 1 ? "<hr class='seperation-line'>" : ""}
        `;
    }

    box.innerHTML = temp_string;
}
printPossibleSessions()

/**
 * If a user selects a session the function checks if the session already has been clicked by the user, so the the user can start the session
 */
function selectThisSessionToStart(sessionID) {
    if (sessionID === LIVE_SESSION_ELEMENTS.currentSessionIDSelected) {
        LIVE_SESSION_ELEMENTS.currentSession = getCopyOf(CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected]);
        setStarterMenu(sessionID);
    } else {
        LIVE_SESSION_ELEMENTS.currentSessionIDSelected = sessionID;
    }
}

/**
 * This function sets the preview of the Session to start
 */
function setStarterMenu(id) {
    const slider = document.getElementById('session-selected');

    slider.style.backgroundImage = "url('../." + CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.sessionsToday[id].type].previewImg + "')";
    slider.style.backgroundSize = "cover";
    slider.style.backgroundPosition = "center";
    slider.style.backgroundRepeat = "no-repeat"

    document.getElementById('session-selected-name').innerHTML = CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.sessionsToday[id].type].name
    document.getElementById('session-selected-duration-num').innerHTML = CALENDAR_ELEMENTS.sessionsToday[id].duration === 0 ? "0 min" : (Math.floor((CALENDAR_ELEMENTS.sessionsToday[id].duration / 60)) <= 0 ? "" : Math.floor((CALENDAR_ELEMENTS.sessionsToday[id].duration / 60)) + " h ") + ((CALENDAR_ELEMENTS.sessionsToday[id].duration % 60) <= 0 ? "" : (CALENDAR_ELEMENTS.sessionsToday[id].duration % 60) + " min")

    openStarterMenu()
}

/**
 * This function opens the menu box
 */
function openStarterMenu() {
    const slider = document.getElementById('session-selected');
    const trackingArea = document.getElementById('tracking-area');

    slider.style.transform = "translateX(0)";
    setTimeout(() => {
        trackingArea.style.transform = "translateY(0)";
    }, 500)

    setTrackingAreaValues()
}

/**
 * Function to set the values of the tracking area
 */
function setTrackingAreaValues() {
    const trackingAreaHeader = document.getElementById('tracking-area-header');
    const trackingAreaHeaderIcon = document.getElementById('tracking-area-header-icon');
    const trackingAreaHeaderName = document.getElementById('tracking-area-header-name');

    trackingAreaHeader.style.color = `${CALENDAR_ELEMENTS.colorCodes[CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].type].darkMain}`
    trackingAreaHeaderIcon.innerHTML = `<img src="../.${CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].type].previewImg}">`
    trackingAreaHeaderName.innerHTML = `${CALENDAR_ELEMENTS.types[CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].type].name}`
    setDuration()
}

/**
 * Sets the remaining duration
 */
function setDuration() {
    const hours = document.getElementById('active-timer-hours')
    const minutes = document.getElementById('active-timer-minutes')
    const seconds = document.getElementById('active-timer-seconds')

    let duration = LIVE_SESSION_ELEMENTS.currentSession.duration * 60;

    let h = Math.floor(duration / 3600);
    let m = Math.floor((duration % 3600) / 60);
    let s = Math.floor(duration % 60);

    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

/**
 * This function closes the menu box
 */
function closeStarterMenu(start) {
    const slider = document.getElementById('session-selected');
    const trackingArea = document.getElementById('tracking-area');

    if (start) {
        fadeOut('session-selected', 500);
    } else {
        trackingArea.style.transform = "translateY(100%)";
        slider.style.transform = "translateX(100%)";
        LIVE_SESSION_ELEMENTS.currentSession = undefined;
        LIVE_SESSION_ELEMENTS.currentSessionIDSelected = -1;
    }
}

/**
 * Function to handle a completed session
 */
function sessionCompleted() {
    CALENDAR_ELEMENTS.sessionsCompleted++;

    for (let i = 0; i < CALENDAR_ELEMENTS.allSessions.length; i++) {
        if (areSessionsEqual(CALENDAR_ELEMENTS.allSessions[i], CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected])) {
            CALENDAR_ELEMENTS.allSessions.splice(i, 1);
        }
    }
    CALENDAR_ELEMENTS.sessionsToday.splice(LIVE_SESSION_ELEMENTS.currentSessionIDSelected, 1);
    CALENDAR_ELEMENTS.lastSevDaysChartData[0].sessionsCompleted = CALENDAR_ELEMENTS.sessionsCompleted;
    if (USER_ELEMENTS.thisUser.sessionsTimeOut === undefined) {
        USER_ELEMENTS.thisUser.points += 2;
        USER_ELEMENTS.thisUser.sessionsTimeOut = setTimeout(() => {
            USER_ELEMENTS.thisUser.sessionsTimeOut = undefined;
        }, 300_000);
    }
    
    saveDataOnLS('calendar-items-today', CALENDAR_ELEMENTS.sessionsToday);
    saveDataOnLS('calendar-items-all', CALENDAR_ELEMENTS.allSessions);
    saveDataOnLS('completed-sessions', CALENDAR_ELEMENTS.sessionsCompleted)
    saveDataOnLS('sessions-completed-chart', CALENDAR_ELEMENTS.lastSevDaysChartData);
    saveDataOnLS('calories-burned-today', parseFloat(LIVE_SESSION_ELEMENTS.caloriesBurnedTotal))

    printPossibleSessions()
    closeStarterMenu(false);
}

/** 
 * Checks if two sessions are equal
*/
function areSessionsEqual(sessionA, sessionB) {
    return sessionA.type === sessionB.type &&
        sessionA.startTime === sessionB.startTime &&
        sessionA.endTime === sessionB.endTime &&
        sessionA.duration === sessionB.duration &&
        sessionA.date.month === sessionB.date.month &&
        sessionA.date.dayOfMonth === sessionB.date.dayOfMonth &&
        sessionA.date.year === sessionB.date.year;
}

/**
 * If an item has been moved by a user the order gets changed
 */
function changeOrder(evt) {
    let newIndex = evt.newIndex / 2;
    let oldIndex = evt.oldIndex / 2;

    //Sort todays sessions
    let orderArr = CALENDAR_ELEMENTS.sessionsToday;

    let tempSession = orderArr[oldIndex];
    orderArr[oldIndex] = orderArr[newIndex];
    orderArr[newIndex] = tempSession;

    CALENDAR_ELEMENTS.sessionsToday = orderArr;

    saveDataOnLS('calendar-items-today', CALENDAR_ELEMENTS.sessionsToday)


    //Sort all sessions
    let index1 = indexOf(orderArr[oldIndex]);
    let index2 = indexOf(orderArr[newIndex]);

    let orderArrAll = CALENDAR_ELEMENTS.allSessions;

    let tempSessionAll = orderArrAll[index1];
    orderArrAll[index1] = orderArrAll[index2];
    orderArrAll[index2] = tempSessionAll;

    CALENDAR_ELEMENTS.allSessions = orderArrAll;
    setTimeout(() => {
        printPossibleSessions()
    }, 150)
    saveDataOnLS('calendar-items-all', CALENDAR_ELEMENTS.allSessions)
}

/**
 * Starts or continues a session
 */
function trackSession() {
    if (LIVE_SESSION_ELEMENTS.sessionRunning) {
        return;
    }
    const activeTimer = document.getElementById('active-timer');
    activeTimer.style.animation = "pulse 1s ease 1s infinite";

    LIVE_SESSION_ELEMENTS.sessionRunning = true;
    LIVE_SESSION_ELEMENTS.timeTracker = setInterval(() => {
        if (LIVE_SESSION_ELEMENTS.timeLimitReached) {
            LIVE_SESSION_ELEMENTS.currentSession.duration = (LIVE_SESSION_ELEMENTS.currentSession.duration * 60 + 1) / 60;
        } else {
            LIVE_SESSION_ELEMENTS.currentSession.duration = (LIVE_SESSION_ELEMENTS.currentSession.duration * 60 - 1) / 60;
        }
        setDuration();
        setFill();
        setCaloriesBurned()
        setSweatLoss()
        checkDuration()
    }, 1_000)
}

/**
 * Function that checks if the duration isnt going below 0
 */
function checkDuration() {
    if (LIVE_SESSION_ELEMENTS.currentSession.duration * 60 <= 1) {
        stopTracking();
        setTrackState(2);
        LIVE_SESSION_ELEMENTS.timeLimitReached = true;
        LIVE_SESSION_ELEMENTS.currentSession.duration = CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].duration;
        console.log(LIVE_SESSION_ELEMENTS.currentSession.duration);

    }
}

/**
 * Function to calculate the calories burned
 */
function setCaloriesBurned() {
    let calPerSec = CALENDAR_ELEMENTS.types[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].calPerSec;

    const num = document.getElementById('calories-burned-prev-num');
    let result;

    if (LIVE_SESSION_ELEMENTS.timeLimitReached) {
        result = (calPerSec * (LIVE_SESSION_ELEMENTS.currentSession.duration * 60)).toFixed(1)
    } else {
        result = (calPerSec * (CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].duration * 60 - LIVE_SESSION_ELEMENTS.currentSession.duration * 60)).toFixed(1)
    }

    num.innerHTML = result + " cal";

    LIVE_SESSION_ELEMENTS.caloriesBurned = result
}

/**
 * Function to calculate the sweat loss
 */
function setSweatLoss() {
    let sweatPerSec = CALENDAR_ELEMENTS.types[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].sweatPerSec;
    const num = document.getElementById('sweat-loss-prev-num');
    let result = 0;

    if (LIVE_SESSION_ELEMENTS.timeLimitReached) {
        result = (sweatPerSec * (LIVE_SESSION_ELEMENTS.currentSession.duration * 60)).toFixed(2)
    } else {
        result = (sweatPerSec * (CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].duration * 60 - LIVE_SESSION_ELEMENTS.currentSession.duration * 60)).toFixed(2)
    }

    num.innerHTML = result + " l";
    LIVE_SESSION_ELEMENTS.sweatLoss = result
}

/**
 * Sets the fill of the circle
 */
function setFill() {
    const fill = document.getElementById('active-timer-fill');

    fill.style.transform = `translateY(${(LIVE_SESSION_ELEMENTS.currentSession.duration / CALENDAR_ELEMENTS.sessionsToday[LIVE_SESSION_ELEMENTS.currentSessionIDSelected].duration) * 100}%)`
}

/**
 * Function that sets the right buttons for tracking
 */
function setTrackState(state) {
    const settings = document.getElementById('active-timer-settings-buttons');

    fadeOut('active-timer-settings-buttons', 500)
    setTimeout(() => {
        settings.innerHTML = LIVE_SESSION_ELEMENTS.trackStates[state];
        fadeIn('active-timer-settings-buttons', 'block')
    }, 500)
}

/**
 * Function that stops an active session, but it doesn't finish it
 */
function stopTracking() {
    LIVE_SESSION_ELEMENTS.sessionRunning = false;

    const activeTimer = document.getElementById('active-timer');
    activeTimer.style.animation = "none";

    clearInterval(LIVE_SESSION_ELEMENTS.timeTracker);
    LIVE_SESSION_ELEMENTS.timeTracker = undefined;
}

/**
 * Function that finishes an active session
 */
function finishSession() {
    const trackingArea = document.getElementById('tracking-area');

    //Safe the values in the total variables
    LIVE_SESSION_ELEMENTS.caloriesBurnedTotal += parseFloat(LIVE_SESSION_ELEMENTS.caloriesBurned);
    LIVE_SESSION_ELEMENTS.sweatLossTotal += parseFloat(LIVE_SESSION_ELEMENTS.sweatLoss);

    //Reset the dynamic variables
    LIVE_SESSION_ELEMENTS.caloriesBurned = 0;
    LIVE_SESSION_ELEMENTS.sweatLoss = 0;
    LIVE_SESSION_ELEMENTS.currentSession = 0;
    LIVE_SESSION_ELEMENTS.timeLimitReached = false;
    LIVE_SESSION_ELEMENTS.sessionRunning = false;

    trackingArea.style.transition = 'all 0.5s cubic-bezier(.89, .13, .31, .96)';
    trackingArea.style.transform = "translateY(100%)"
    setTimeout(() => {
        trackingArea.style.transition = "none";
    }, 500)


    sessionCompleted()
}

function deny() {
    closeWarning()
}

function accept() {
    closeWarning();
    setTimeout(() => {
        finishSession()
    }, 500)
}

function openWarning() {
    fadeIn('active-warning', 'flex');
}

function closeWarning() {
    fadeOut('active-warning', 500)
}