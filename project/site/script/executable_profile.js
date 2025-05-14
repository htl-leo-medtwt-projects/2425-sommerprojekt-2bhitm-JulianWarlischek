/**
 * Settings of user.html
 */
function loadUserSettings() {
    SETTINGS.path = USER_ELEMENTS.upperSite;
    SETTINGS.userImgPath = USER_ELEMENTS.userImgPath;
    document.getElementById('upper-profile-section').style.backgroundColor = USER_ELEMENTS.profileColor;
    document.getElementById('leave-edit-profile').onclick = () => { closeEditor(false), checkForUnsavedChanges() };
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
function openEditor() {
    fadeIn('edit-profile-section', 'flex');
    fadeIn('edit-profile-section-inner', 'flex');
    fadeOut('unsaved-changes-confirmation', 0);
}


/**
 * Function to close the edit profile section
 */
function closeEditor(forcedQuit = false) {
    if (forcedQuit) {
        fadeOut('edit-profile-section', 400);
        fadeIn('edit-profile-section-inner', 'flex');
        closeConfirmation();
    } else {
        fadeOut('edit-profile-section-inner', 0)
        fadeIn('unsaved-changes-confirmation', 'flex');
        if (!USER_ELEMENTS.unsavedChanges) {
            closeEditor(true);
        }
        document.getElementById('leave-edit-profile').onclick = () => { closeEditor(true) };
    }
}

function closeConfirmation() {
    fadeOut('unsaved-changes-confirmation', 0);
    fadeIn('edit-profile-section-inner', 'flex');
    document.getElementById('leave-edit-profile').onclick = () => { closeEditor(false), checkForUnsavedChanges() };
}

function moveWeightSlider(saveToJSON) {
    let sliderValue = document.getElementById('input-user-weight').value;
    let number = document.getElementById('input-user-weight-num');


    //Copilot generated this code
    let min = 30;
    let max = 200;
    let percentage = ((sliderValue - min) / (max - min)) * 100 - 5;

    number.style.left = `${percentage < 0 ? 0 : Math.min(percentage, 80)}%`;

    number.innerHTML = sliderValue + " kg";
    //Copilot generated this code (End)

    if (saveToJSON) {
        USER_ELEMENTS.thisUser.weight = sliderValue;
    }
    checkForUnsavedChanges();
}

moveWeightSlider(true)

function moveHeightSlider(saveToJSON) {
    let sliderValue = document.getElementById('input-user-height').value;
    let number = document.getElementById('input-user-height-num');


    //Copilot generated this code
    let min = 30;
    let max = 200;
    let percentage = ((sliderValue - min) / (max - min)) * 100 - 5;

    number.style.left = `${percentage < 0 ? 0 : Math.min(percentage, 80)}%`;

    number.innerHTML = sliderValue + " cm";
    //Copilot generated this code (End)
    if (saveToJSON) {
        USER_ELEMENTS.thisUser.height = sliderValue;
    }
    checkForUnsavedChanges();
}
moveHeightSlider(true)

/**
 * Function to save the name of the user
 */
function readName(saveToJSON) {
    let name = document.getElementById('input-user-name').value;
    checkForUnsavedChanges();
    if (name.length > 0) {
        if (saveToJSON) {
            USER_ELEMENTS.thisUser.name = name;
        }
        return true
    } else {
        document.getElementById('input-user-name').value = "";
        //Throw an error here
    }

}


/**
 * Function to save the gender of the user
 */
function readGender(saveToJSON) {
    let gender = document.getElementById('input-user-gender').value.toLowerCase();
    checkForUnsavedChanges();

    if (gender === "other" || gender === 'male' || gender === 'female') {
        if (saveToJSON) {
            USER_ELEMENTS.thisUser.gender = gender;
        }
        return true
    } else {
        document.getElementById('input-user-gender').value = "";
        //Throw an error here
    }
}


/**
 * Function to save the age of the user
 */
function readAge(saveToJSON) {
    let age = document.getElementById('input-user-age').value;
    checkForUnsavedChanges();
    if (age > 0 && age < 120) {
        if (saveToJSON) {
            USER_ELEMENTS.thisUser.age = age;
        }
        return true
    } else {
        document.getElementById('input-user-age').value = "";
        //Throw an error here
    }
}


/**
 * Function to save the mail of the user
 */
function readMail(saveToJSON) {
    let mail = document.getElementById('input-user-mail').value;
    checkForUnsavedChanges();
    if (mail.includes('@') && mail.includes('.')) {
        if (saveToJSON) {
            USER_ELEMENTS.thisUser.mail = mail;
        }
        return true
    } else {
        document.getElementById('input-user-mail').value = "";
        //Throw an error here
    }
}


/**
 * Function to save all changes
 */
function saveChanges() {
    let val1 = readName(true);
    let val2 = readGender(true);
    let val3 = readAge(true);
    let val4 = readMail(true);
    moveHeightSlider(true)
    moveWeightSlider(true)

    if (!val1 || !val2 || !val3 || !val4) {
        return
    }
    loadDataToProfile();
    closeEditor(true);
}

/**
 * Loads input values to the profile
 */
function loadDataToProfile() {
    document.getElementById('user-name').innerHTML = USER_ELEMENTS.thisUser.name;
    document.getElementById('user-gender').innerHTML = USER_ELEMENTS.thisUser.gender;
    document.getElementById('user-age').innerHTML = USER_ELEMENTS.thisUser.age + " years old";
    document.getElementById('user-weight').innerHTML = USER_ELEMENTS.thisUser.weight + " kg";
    document.getElementById('user-height').innerHTML = USER_ELEMENTS.thisUser.height + " cm";
}

/**
 * Function to check if there are unsaved changes
 */
function checkForUnsavedChanges() {
    if (document.getElementById('input-user-name').value != USER_ELEMENTS.thisUser.name || document.getElementById('input-user-gender').value != USER_ELEMENTS.thisUser.gender || document.getElementById('input-user-age').value != USER_ELEMENTS.thisUser.age || document.getElementById('input-user-mail').value != USER_ELEMENTS.thisUser.mail || document.getElementById('input-user-weight').value != USER_ELEMENTS.thisUser.weight || document.getElementById('input-user-height').value != USER_ELEMENTS.thisUser.height) {
        USER_ELEMENTS.unsavedChanges = true;
    } else {
        USER_ELEMENTS.unsavedChanges = false;
    }
}

function openLogin() {
    let loginSlider = document.getElementById('login-section');

    loginSlider.style.transform = 'translateY(0)';
}

function openRegister() {
    let registerSlider = document.getElementById('register-section');

    registerSlider.style.transform = 'translateY(0)';
}

function closeLogin() {
    let loginSlider = document.getElementById('login-section');

    loginSlider.style.transform = 'translateY(100%)';
}

function closeRegister() {
    let registerSlider = document.getElementById('register-section');

    registerSlider.style.transform = 'translateY(100%)';
}