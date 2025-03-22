/**
 * Dynamic content of index.html
 */
function loadIndex() { }

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

function setHTMLHeader(content) {
    HEADER_ELEMENTS.innerBox.style.opacity = "0"
    HEADER_ELEMENTS.timeOut = setTimeout(() => {
        HEADER_ELEMENTS.innerBox.innerHTML = content
        HEADER_ELEMENTS.innerBox.style.opacity = "1"
        HEADER_ELEMENTS.timeOut = undefined
    }, 600)
}