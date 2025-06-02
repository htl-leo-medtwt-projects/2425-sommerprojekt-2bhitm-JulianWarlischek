/**
 * Settings of index.html
 */
function loadIndex() {
    SETTINGS.path = INDEX_ELEMENTS.path;
    SETTINGS.userImgPath = INDEX_ELEMENTS.userImgPath;
    let update1 = updateChart()
    let update2 = updateSessionsDone();
    let update3 = updateCaloriesBurned()
    let update4 = updateHydration();

    if (update1 || update2 || update3 || update4) {
        update()
    }
    if (document.title != 'FitBalance') {
        document.body.innerHTML += `<div id="level-up-box" onclick="hideLevelUp()" ${document.title === 'Muscles' || document.title === 'Fluid intake' ? 'style="background-color: white; color: black; border: 2px solid var(--main-color)"' : ""}></div>`

    }
}
loadIndex()

/**
 * 
 * @param {string} elementId ID of the element
 * @param {number} millis Duration of the fade out (CHECK THE TRANSITION!!!)
 */
function fadeOut(elementId, millis) {
    let element = document.getElementById(elementId)

    element.style.opacity = "0";

    setTimeout(() => {
        element.style.display = "none";
    }, millis)
}

/**
 * 
 * @param {string} elementId ID of the element
 * @param {string} display How the box design should work after the fade in 
 */
function fadeIn(elementId, display) {
    let element = document.getElementById(elementId)
    element.style.display = display || "block";

    setTimeout(() => {
        element.style.opacity = "1";
    }, 20)
}

/**
 * Function to filter a number out of a string
 */
function getInteger(int_string) {
    const nums = int_string.match(/\d+/);

    return nums[0];
}

/**
 * Generates a random value
 */
function getRandom(max, min) {
    return Math.floor(Math.random() * max) + min;
}

/**
 * Function to generate a token
 */
function setToken() {
    USER_ELEMENTS.thisUser.token = USER_ELEMENTS.tokenSettings.tokenLength;
    USER_ELEMENTS.thisUser.activeOnDevice = true;
}

/**
 * Loads the correct user from the local storage
 */
function loadThisUser() {
    for (let i = 0; i < USER_ELEMENTS.loggedUsers.length; i++) {
        if (USER_ELEMENTS.loggedUsers[i].activeOnDevice) {
            USER_ELEMENTS.thisUser = USER_ELEMENTS.loggedUsers[i];
            break
        }
    }
}
loadThisUser();

/**
 * Search for the user in the local storage
 */
function setUser() {
    for (let i = 0; i < USER_ELEMENTS.loggedUsers.length; i++) {
        if (USER_ELEMENTS.loggedUsers[i].activeOnDevice) {
            USER_ELEMENTS.thisUser = USER_ELEMENTS.loggedUsers[i];
            if (document.title == "Profile") {
                openProfile()
            }
            USER_ELEMENTS.thisUser.token--;
            USER_ELEMENTS.loggedUsers[i] = USER_ELEMENTS.thisUser;
            checkValidToken()
            saveDataOnLS('logged-users', USER_ELEMENTS.loggedUsers);
            return
        }
    }
    if (document.title == "Profile") {
        closeProfile()
    }
}
if (document.title != "Profile") {
    setUser()
}

function insertUser(setFalse) {
    for (let i = 0; i < USER_ELEMENTS.loggedUsers.length; i++) {
        if (USER_ELEMENTS.loggedUsers[i].activeOnDevice) {
            USER_ELEMENTS.loggedUsers[i] = USER_ELEMENTS.thisUser;
            if (setFalse) {
                USER_ELEMENTS.loggedUsers[i].activeOnDevice = false;
            }
            saveDataOnLS('logged-users', USER_ELEMENTS.loggedUsers);
            break
        }
    }
}

/**
 * Checks if token is valid
 */
function checkValidToken() {
    if (USER_ELEMENTS.thisUser.token <= 0) {
        USER_ELEMENTS.thisUser.activeOnDevice = false;
        USER_ELEMENTS.thisUser.token = 0;
    }
}

function checkNextLevel() {
    if (USER_ELEMENTS.thisUser.points >= USER_ELEMENTS.thisUser.levelMaxPoints) {
        riseLevel();
    }
}

function riseLevel() {
    USER_ELEMENTS.thisUser.level++;
    USER_ELEMENTS.thisUser.levelMaxPoints = USER_ELEMENTS.thisUser.level * USER_ELEMENTS.thisUser.pointsPerLevel;
    playLevelUpAnimation();
}

function getPercentPoints(points, maxPoints) {
    const previousLevelPoints = maxPoints - 20;
    const progress = points - previousLevelPoints;
    const percent = (progress / 20) * 100;
    return Math.max(0, Math.min(percent, 100));
}

function playLevelUpAnimation() {
    const levelUpBox = document.getElementById('level-up-box');

    fadeIn('level-up-box', 'flex');
    setTimeout(() => {
        levelUpBox.style.transform = "translateY(0vh) translateX(-50%)";
    }, 500);

    levelUpBox.innerHTML = `
    <div id="level-up-content-inner">
    <div id="new-level" ${document.title === 'Muscles' || document.title === 'Fluid intake' ? 'style="box-shadow: var(--box-shadow); color: white;"' :""}>
        <h2>${USER_ELEMENTS.thisUser.level}</h2>
    </div>
    <h1>LEVEL UP</h1>
    </div>
    `

    setTimeout(() => {
        fadeOut('level-up-content-inner', 500);
        setTimeout(() => {
            document.getElementById('level-up-content-inner').innerHTML = `
            <div id="level-up-content-inner">
                <div id="level-up-content">
                    <div id="points-bar">
                        <div id="curr-level">
                            <h2>${USER_ELEMENTS.thisUser.level}</h2>
                        </div>
                        <div id="level-bar" ${document.title === 'Muscles' || document.title === 'Fluid intake' ? 'style="background-color: rgb(213, 213, 213);"' : ""}>
                            <div id="level-bar-fill" ${document.title === 'Muscles' || document.title === 'Fluid intake' ? 'style="background-color: var(--main-color);"' : ""}></div>
                        </div>
                        <div id="next-level">
                            <h2>${USER_ELEMENTS.thisUser.level + 1}</h2>
                        </div>
                    </div>
                    <h3>You need <span ${document.title === 'Muscles' || document.title === 'Fluid intake' ? 'style="color: var(--secondary-blue);"' : "style='color:var(--light-blue);'"}">
                        ${USER_ELEMENTS.thisUser.levelMaxPoints - USER_ELEMENTS.thisUser.points}
                        </span> more points to level up!
                    </h3>
                </div>
            </div>
        `
        fadeIn('level-up-content-inner', 'flex');
            const levelBarFill = document.getElementById('level-bar-fill');
            levelBarFill.style.transform = `translateX(${percent - 100}%)`;

            setTimeout(() => {
                hideLevelUp();
            }, 4000)
        }, 500);
    }, 3000);

    const percent = getPercentPoints(USER_ELEMENTS.thisUser.points, USER_ELEMENTS.thisUser.levelMaxPoints);

}

function hideLevelUp() {
    const levelUpBox = document.getElementById('level-up-box');
    levelUpBox.style.transform = "translateY(-50vh) translateX(-50%)";
    setTimeout(() => {
        fadeOut('level-up-box', 500);
    }, 500);
}