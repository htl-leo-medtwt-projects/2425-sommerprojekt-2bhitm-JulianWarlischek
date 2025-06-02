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
                        <img src="${document.title === 'Dashboard' ? "" : "."}${SETTINGS.userImgPath}" alt="user-img"> <!-- profile image -->
                    </div>
                    <h4 id="user-stats-level-name">Level ${USER_ELEMENTS.thisUser.level}</h4>
                  </div>`,
}

/**
 * Header animation
 */
document.addEventListener('scroll', animateHeader)
function animateHeader() {
    const scroll = window.scrollY;

    if (scroll === 0 && HEADER_ELEMENTS.headerBox.style.top != '') {
        HEADER_ELEMENTS.headerBox.style.top = "-2vh"
        return
    }

    if (HEADER_ELEMENTS.timeOut !== undefined) {
        return
    }

    if (scroll > HEADER_ELEMENTS.prevScrollY && HEADER_ELEMENTS.state != 1) {
        HEADER_ELEMENTS.headerBox.style.top = '-1vh'
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
        HEADER_ELEMENTS.state === 1 ? HEADER_ELEMENTS.innerBox.style.justifyContent = "center" : HEADER_ELEMENTS.innerBox.style.justifyContent = "space-between";
    }, 600)
}