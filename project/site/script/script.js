/**
 * HEADER_ELEMENTS:
 * 
 * Elements and values of the header
 */
let HEADER_ELEMENTS = {
    headerBox: document.getElementById('header'),
    innerBox: document.getElementById('header-inner'),
    navOffsetTop: 2,
    prevScrollY: 0,
    state: 0,
    timeOut: undefined,
    logo: `<a href="${document.title === 'Dashboard' ? "" : "."}${SETTINGS.path}"><div id="fitbalance-logo">
              <h3 id="fitbalance-logo-headline">Fitbalance</h3>
           </div>
           </a>`,
    userProfile: `<div id="user-stats">
                    <div id="user-stats-img">
                        <img src="${document.title === 'Dashboard' ? "" : "."}./images/running-profile.png" alt="user-img"> <!-- profile image -->
                    </div>
                    <h4 id="user-stats-level-name">Level 1</h4>
                  </div>`,
}

/**
 * Dynamic content of index.html
 */
function loadIndex() {
    SETTINGS.path = "";
 }

/**
 * Header animation
 */
document.addEventListener('scroll', animateHeader)
function animateHeader() {
    const scroll = window.scrollY;
    console.log("Scroll");
    
    if (scroll === 0 && HEADER_ELEMENTS.headerBox.style.top != '') {
        HEADER_ELEMENTS.headerBox.style.top = "-2vh"
        return
    }

    if (HEADER_ELEMENTS.timeOut !== undefined) {
        return
    }

    if (scroll > HEADER_ELEMENTS.prevScrollY && HEADER_ELEMENTS.state != 1) {
        HEADER_ELEMENTS.headerBox.style.top = '-4vh'
        HEADER_ELEMENTS.state = 1;
        setHTMLHeader(HEADER_ELEMENTS.logo)
    } else if (scroll < HEADER_ELEMENTS.prevScrollY && HEADER_ELEMENTS.state != -1) {
        HEADER_ELEMENTS.headerBox.style.top = '0vh'
        HEADER_ELEMENTS.state = -1;
        setHTMLHeader(HEADER_ELEMENTS.logo + HEADER_ELEMENTS.userProfile);
    }
    HEADER_ELEMENTS.prevScrollY = scroll;
}

setHTMLHeader(HEADER_ELEMENTS.logo + HEADER_ELEMENTS.userProfile);
function setHTMLHeader(content) {
    HEADER_ELEMENTS.innerBox.style.opacity = "0"
    HEADER_ELEMENTS.timeOut = setTimeout(() => {
        HEADER_ELEMENTS.innerBox.innerHTML = content
        HEADER_ELEMENTS.innerBox.style.opacity = "1"
        HEADER_ELEMENTS.timeOut = undefined
    }, 600)
}

function fadeOut(elementId, millis) {
    let element = document.getElementById(elementId)
    element.style.opacity = "0";

    setTimeout(() => {
        element.style.display = "none";
    }, millis)
}

function fadeIn(elementId, display) {
    let element = document.getElementById(elementId)
    element.style.display = display || "block";

    setTimeout(() => {
        element.style.opacity = "1";
    }, 20)
}