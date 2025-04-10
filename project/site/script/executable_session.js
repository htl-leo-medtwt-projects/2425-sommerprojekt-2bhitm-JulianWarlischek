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

    console.log(items);
    

    for (let i = 0; i < items.length; i++) {
        temp_string += `
                <div class="training-session possible-session ${i % 2 == 0 ? 'possible-session-left' : 'possible-session-right'}" style="background-color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].main}; color: ${CALENDAR_ELEMENTS.colorCodes[items[i].type].darkMain};" onclick="selectThisSessionToStart('${i + 1}-today')">
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
        setStarterMenu(getInteger(sessionID));

    } else {
        LIVE_SESSION_ELEMENTS.currentSessionIDSelected = sessionID;
    }
}

/**
 * This function sets the preview of the Session to start
 */
function setStarterMenu(id) {
    LIVE_SESSION_ELEMENTS.currentSessionIDSelected = ""
    const slider = document.getElementById('session-selected');
    id = parseInt(id) - 1;

    console.log(id);
    
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
    slider.style.transform = "translateX(0)";

}

/**
 * This function opens the menu box
 */
function closeStarterMenu() {
    const slider = document.getElementById('session-selected');
    slider.style.transform = "translateX(100%)";
}