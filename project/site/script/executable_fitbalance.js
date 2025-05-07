/**
 * Settings of fitbalance.html
 */
function loadFitbalancePage() {
    SETTINGS.path = FITBALANCE_ELEMENTS.upperSite;
    SETTINGS.userImgPath = FITBALANCE_ELEMENTS.userImgPath;
    
}
loadFitbalancePage()

/**
 * Onscroll
 */
document.addEventListener('scroll', checkWelcomeBox)

function checkWelcomeBox() {
    let currScroll = window.scrollY;
    

    if (FITBALANCE_ELEMENTS.welcomeBoxState === 0 && currScroll > 50) {
        FITBALANCE_ELEMENTS.welcomeBox.style.position = 'static'
        FITBALANCE_ELEMENTS.welcomeBoxState = 1;
    } else if (FITBALANCE_ELEMENTS.welcomeBoxState === 1 && currScroll < 50) {
        FITBALANCE_ELEMENTS.welcomeBox.style.position = 'relative'    
        FITBALANCE_ELEMENTS.welcomeBoxState = 0;
    }
}