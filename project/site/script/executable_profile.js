/**
 * Settings of user.html
 */
function loadUserSettings() {
    SETTINGS.path = USER_ELEMENTS.upperSite;
    SETTINGS.userImgPath = USER_ELEMENTS.userImgPath;
    document.getElementById('upper-profile-section').style.backgroundColor = USER_ELEMENTS.profileColor;
}
loadUserSettings();

function newColor() {
    let color = document.getElementById('upper-profile-color-input').value;
    document.getElementById('upper-profile-section').style.backgroundColor = color;

    saveDataOnLS('profile-color', color);

}

/**
 * Function to open the color picker
 */
function openColorPicker() {
    let colorPicker = document.getElementById('picker-section');

    colorPicker.style.transform = 'translateX(0)';
}

/**
 * Function to close the color picker
 */
function closeColorPicker() {
    let colorPicker = document.getElementById('picker-section');

    colorPicker.style.transform = 'translateX(200%)';
}


/**
 * Function to open the edit profile section
 */
function openEditor(){
    fadeIn('edit-profile-section', 'flex');
}


/**
 * Function to close the edit profile section
 */
function closeEditor(forcedQuit = false){
    if(forcedQuit){
        fadeOut('edit-profile-section', 400);
    }
}

