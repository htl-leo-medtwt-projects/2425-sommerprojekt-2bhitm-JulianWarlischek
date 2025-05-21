

/**
 * Settings of user.html
 */
function loadUserSettings() {
    SETTINGS.path = USER_ELEMENTS.upperSite;
    SETTINGS.userImgPath = USER_ELEMENTS.userImgPath;
    setUser()
    document.getElementById('upper-profile-section').style.backgroundColor = USER_ELEMENTS.thisUser.profileColor === '' ? '#5A9ECF' : USER_ELEMENTS.thisUser.profileColor;
    document.getElementById('leave-edit-profile').onclick = () => { closeEditor(false), checkForUnsavedChanges() };
}
loadUserSettings();


function newColor() {
    let color = document.getElementById('upper-profile-color-input').value;
    document.getElementById('upper-profile-section').style.backgroundColor = color;
    USER_ELEMENTS.thisUser.profileColor = color;
    insertUser()
}

function insertUser(setFalse) {
    for (let i = 0; i < USER_ELEMENTS.loggedUsers.length; i++) {
        if (USER_ELEMENTS.loggedUsers[i].activeOnDevice) {
            USER_ELEMENTS.loggedUsers[i] = USER_ELEMENTS.thisUser;
            if(setFalse){
                USER_ELEMENTS.loggedUsers[i].activeOnDevice = false;
            }
            saveDataOnLS('logged-users', USER_ELEMENTS.loggedUsers);
            break
        }
    }
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
    moveHeightSlider(false)
    moveWeightSlider(false)
    setInputValues();
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
            return
        }
        document.getElementById('leave-edit-profile').onclick = () => { closeEditor(true) };
    }
}

function closeConfirmation() {
    fadeOut('unsaved-changes-confirmation', 0);
    fadeIn('edit-profile-section-inner', 'flex');
    document.getElementById('leave-edit-profile').onclick = () => { checkForUnsavedChanges(), closeEditor(false) };
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
    console.log(USER_ELEMENTS.thisUser.name);

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
    document.getElementById('upper-profile-section').style.backgroundColor = USER_ELEMENTS.thisUser.profileColor === '' ? '#5A9ECF' : USER_ELEMENTS.thisUser.profileColor;
    setInputValues();
}

function setInputValues() {
    document.getElementById('input-user-name').value = USER_ELEMENTS.thisUser.name;
    document.getElementById('input-user-gender').value = USER_ELEMENTS.thisUser.gender;
    document.getElementById('input-user-age').value = USER_ELEMENTS.thisUser.age;
    document.getElementById('input-user-mail').value = USER_ELEMENTS.thisUser.mail;
    document.getElementById('input-user-weight').value = USER_ELEMENTS.thisUser.weight;
    document.getElementById('input-user-height').value = USER_ELEMENTS.thisUser.height;
}

/**
 * Function to check if there are unsaved changes
 */
function checkForUnsavedChanges() {
    console.log(document.getElementById('input-user-name').value != USER_ELEMENTS.thisUser.name);
    console.log(document.getElementById('input-user-gender').value != USER_ELEMENTS.thisUser.gender);
    console.log(document.getElementById('input-user-age').value != USER_ELEMENTS.thisUser.age);
    console.log(document.getElementById('input-user-mail').value != USER_ELEMENTS.thisUser.mail);
    console.log(document.getElementById('input-user-weight').value != USER_ELEMENTS.thisUser.weight);
    console.log(document.getElementById('input-user-height').value != USER_ELEMENTS.thisUser.height);

    if (document.getElementById('input-user-name').value != USER_ELEMENTS.thisUser.name || document.getElementById('input-user-gender').value != USER_ELEMENTS.thisUser.gender || document.getElementById('input-user-age').value != USER_ELEMENTS.thisUser.age || document.getElementById('input-user-mail').value != USER_ELEMENTS.thisUser.mail || document.getElementById('input-user-weight').value != USER_ELEMENTS.thisUser.weight || document.getElementById('input-user-height').value != USER_ELEMENTS.thisUser.height) {
        USER_ELEMENTS.unsavedChanges = true;
    } else {
        USER_ELEMENTS.unsavedChanges = false;
    }

}

function openLogin() {
    let loginSlider = document.getElementById('login-section');

    loginSlider.style.transform = 'translateY(0)';
    fadeOut('navigation', 0)
    fadeOut('header', 0)
}

function openRegister() {
    let registerSlider = document.getElementById('register-section');

    registerSlider.style.transform = 'translateY(0%)';

    fadeOut('navigation', 0)
    fadeOut('header', 0)

}

function closeLogin() {
    let loginSlider = document.getElementById('login-section');

    loginSlider.style.transform = 'translateY(100%)';
    fadeIn('navigation', 'flex')
    fadeIn('header', 'flex')
}

function closeRegister() {
    let registerSlider = document.getElementById('register-section');

    registerSlider.style.transform = 'translateY(100%)';
    fadeIn('navigation', 'flex')
    fadeIn('header', 'flex')
}

function checkGenderRegister() {
    let input = document.getElementById('register-gender').value.toLowerCase();
    document.getElementById('register-input-group-label-gender').style.color = 'black';
    if (input != 'male' && input != 'female' && input != 'other') {
        document.getElementById('register-gender').value = "";
        if (input != "") {
            document.getElementById('register-input-group-label-gender').style.color = 'red';
            return false;
        }
    }

    if (input == "") {
        document.getElementById('register-input-group-label-gender').style.color = 'red';
        return false;
    }
    USER_ELEMENTS.registerUser.gender = input;
    return true;
}

function checkAgeRegister() {
    let input = document.getElementById('register-age').value;

    document.getElementById('register-input-group-label-age').style.color = 'black';
    if (input < 0 || input > 120) {
        document.getElementById('register-age').value = "";

        if (input != "") {
            document.getElementById('register-input-group-label-age').style.color = 'red';
            return false;
        }
    }

    if (input == "") {
        document.getElementById('register-input-group-label-age').style.color = 'red';
        return false;
    }
    USER_ELEMENTS.registerUser.age = input;
    return true
}

function checkMailRegister() {
    let input = document.getElementById('register-email').value;

    document.getElementById('register-input-group-label-email').style.color = 'black';
    if (!input.includes('@') || !input.includes('.')) {
        document.getElementById('register-email').value = "";
        if (input != "") {
            document.getElementById('register-input-group-label-email').style.color = 'red';
            return false;
        }
    }

    if (input == "") {
        document.getElementById('register-input-group-label-email').style.color = 'red';
        return false;
    }
    USER_ELEMENTS.registerUser.mail = input;
    return true;
}



function checkPasswordConfirmRegister() {
    let pw = document.getElementById('register-password').value;
    let pw_confirm = document.getElementById('register-password-confirm').value;

    document.getElementById('register-input-group-label-password-confirm').style.color = 'black';

    if (pw_confirm != "") {
        if (pw != pw_confirm) {
            document.getElementById('register-input-group-label-password-confirm').style.color = 'red';
            return false;
        }
    }

    if (pw_confirm == "") {
        document.getElementById('register-input-group-label-password-confirm').style.color = 'red';
        return false;
    }
    return true;
}

function checkPasswordRegister() {
    let pw = document.getElementById('register-password').value;
    document.getElementById('register-input-group-label-password').style.color = 'black';
    if (pw.length < 8 && pw != "") {
        document.getElementById('register-input-group-label-password').style.color = 'red';
        return false;
    }

    if (pw == "") {
        document.getElementById('register-input-group-label-password').style.color = 'red';
        return false;
    }
    getHas(pw)

    return true;
}

async function getHas(pw) {
    USER_ELEMENTS.registerUser.password = await hashStringSHA256(pw);
}

function checkNameRegister() {
    let input = document.getElementById('register-name').value;

    document.getElementById('register-input-group-label-name').style.color = 'black';
    if (input == "") {
        document.getElementById('register-input-group-label-name').style.color = 'red';
        return false;
    }
    USER_ELEMENTS.registerUser.name = input;
    return true;
}

function registerData() {
    let val1 = checkGenderRegister();
    let val2 = checkAgeRegister();
    let val3 = checkMailRegister();
    let val4 = checkPasswordConfirmRegister();
    let val5 = checkNameRegister();
    let val6 = checkPasswordRegister()

    if (!val1 || !val2 || !val3 || !val4 || !val5 || !val6) {
        return
    }
    setRegisterBodyData(true);
}

function setRegisterBodyData(state) {
    openRegisterBodyData();

    fadeOut('register-body-data-box-inner', 300);
    if (state) {
        document.getElementById('register-body-data-box-headline-text').innerHTML = USER_ELEMENTS.registerInput[USER_ELEMENTS.registerInputIndex].headline;
        document.getElementById('register-body-data-box-img').innerHTML = `<img src="${USER_ELEMENTS.registerInput[USER_ELEMENTS.registerInputIndex].img}" alt="register-img">`;
        document.getElementById('register-body-data-box-input').innerHTML = USER_ELEMENTS.registerInput[USER_ELEMENTS.registerInputIndex].html;
    }
    setTimeout(() => {
        document.getElementById('register-body-data-box-headline-text').innerHTML = USER_ELEMENTS.registerInput[USER_ELEMENTS.registerInputIndex].headline;
        document.getElementById('register-body-data-box-img').innerHTML = `<img src="${USER_ELEMENTS.registerInput[USER_ELEMENTS.registerInputIndex].img}" alt="register-img">`;
        document.getElementById('register-body-data-box-input').innerHTML = USER_ELEMENTS.registerInput[USER_ELEMENTS.registerInputIndex].html;
        fadeIn('register-body-data-box-inner', 'flex');
        if (USER_ELEMENTS.registerInputIndex === 0 && state) {
            updateWeightLabel();
        } else if (USER_ELEMENTS.registerInputIndex === 1) {
            updateHeightLabel();
        }
    }, 300);
}


function openRegisterBodyData() {
    fadeIn('register-body-data-box', 'flex')
}

function closeRegisterBodyData() {
    fadeOut('register-body-data-box', 300);
}

function updateWeightLabel() {
    let sliderValue = getCopyOf(document.getElementById('register-weight').value);
    let number = document.getElementById('register-weight-label');

    //Copilot generated this code
    let min = 30;
    let max = 200;
    let percentage = ((sliderValue - min) / (max - min)) * 100 - 5;

    number.style.left = `${percentage < 0 ? 0 : Math.min(percentage, 75)}%`;

    number.innerHTML = sliderValue + " kg";
    //Copilot generated this code (End)

    USER_ELEMENTS.registerUser.weight = sliderValue;
}


function updateHeightLabel() {
    let sliderValue = document.getElementById('register-height').value;
    let number = document.getElementById('register-height-label');

    //Copilot generated this code
    let min = 30;
    let max = 200;
    let percentage = ((sliderValue - min) / (max - min)) * 100 - 5;

    number.style.left = `${percentage < 0 ? 0 : Math.min(percentage, 75)}%`;

    number.innerHTML = sliderValue + " cm";
    //Copilot generated this code (End)

    USER_ELEMENTS.registerUser.height = sliderValue;
}


function riseInputCounter() {
    USER_ELEMENTS.registerInputIndex++;

    if (USER_ELEMENTS.registerInputIndex > USER_ELEMENTS.registerInput.length - 1) {
        closeRegisterBodyData()
        USER_ELEMENTS.thisUser.name = USER_ELEMENTS.registerUser.name;
        USER_ELEMENTS.thisUser.age = USER_ELEMENTS.registerUser.age;
        USER_ELEMENTS.thisUser.gender = USER_ELEMENTS.registerUser.gender;
        USER_ELEMENTS.thisUser.mail = USER_ELEMENTS.registerUser.mail;
        USER_ELEMENTS.thisUser.weight = USER_ELEMENTS.registerUser.weight;
        USER_ELEMENTS.thisUser.height = USER_ELEMENTS.registerUser.height;
        USER_ELEMENTS.thisUser.password = USER_ELEMENTS.registerUser.password;
        USER_ELEMENTS.thisUser.profileColor = USER_ELEMENTS.registerUser.profileColor;
        setToken();
        USER_ELEMENTS.loggedUsers.push(USER_ELEMENTS.thisUser);
        saveDataOnLS('logged-users', USER_ELEMENTS.loggedUsers);

        USER_ELEMENTS.registerInputIndex = 0;
        openProfile()
        setToken()
    }

    setRegisterBodyData();
}

function lowerInputCounter() {
    USER_ELEMENTS.registerInputIndex--;

    if (USER_ELEMENTS.registerInputIndex < 0) {
        closeRegisterBodyData()
        openRegister();
        USER_ELEMENTS.registerInputIndex = 0;
    }

    setRegisterBodyData();
}

function openProfile() {
    let profileSlider = document.getElementById('profile-section');

    profileSlider.style.transform = 'translateY(0)';
    closeRegister();
    loadDataToProfile()
    fadeOut('login-or-register-section', 0)
}

function checkMailLogin() {
    let input = document.getElementById('login-email').value;

    document.getElementById('login-input-group-label-email').style.color = 'black';
    if (!input.includes('@') || !input.includes('.')) {
        document.getElementById('login-email').value = "";
        if (input != "") {
            document.getElementById('login-input-group-label-email').style.color = 'red';
            return false;
        }
    }

    if (input == "") {
        document.getElementById('login-input-group-label-email').style.color = 'red';
        return false;
    }
    return true;
}

async function login() {
    let val1 = checkMailLogin();
    let val2 = checkPasswordLogin();

    if (!val1 || !val2) {
        return
    }
    let email = document.getElementById('login-email').value;
    let password = await getHash(document.getElementById('login-password').value);

    for (let i = 0; i < USER_ELEMENTS.loggedUsers.length; i++) {
        console.log(USER_ELEMENTS.loggedUsers[i].password + " == " + password);
        console.log(USER_ELEMENTS.loggedUsers[i].mail + " == " + email);
        if (USER_ELEMENTS.loggedUsers[i].mail == email && USER_ELEMENTS.loggedUsers[i].password == password) {
            USER_ELEMENTS.thisUser = USER_ELEMENTS.loggedUsers[i];
            USER_ELEMENTS.thisUser.activeOnDevice = true;
            USER_ELEMENTS.thisUser.token = USER_ELEMENTS.tokenSettings.tokenLength;
            saveDataOnLS('logged-users', USER_ELEMENTS.loggedUsers);
            openProfile()
            closeLogin()
            return
        }
    }
}

function checkPasswordLogin() {
    let pw = document.getElementById('login-password').value;
    document.getElementById('login-input-group-label-password').style.color = 'black';

    if (pw == "") {
        document.getElementById('login-input-group-label-password').style.color = 'red';
        return false;
    }
    return true
}

function resetLogin() {
    document.getElementById('login-email').value = "";
    document.getElementById('login-password').value = "";
    document.getElementById('login-input-group-label-email').style.color = 'black';
    document.getElementById('login-input-group-label-password').style.color = 'black';
}

function resetRegister() {
    document.getElementById('register-name').value = "";
    document.getElementById('register-gender').value = "";
    document.getElementById('register-age').value = "";
    document.getElementById('register-email').value = "";
    document.getElementById('register-password').value = "";

    document.getElementById('register-input-group-label-name').style.color = 'black';
    document.getElementById('register-input-group-label-gender').style.color = 'black';
    document.getElementById('register-input-group-label-age').style.color = 'black';
    document.getElementById('register-input-group-label-email').style.color = 'black';
    document.getElementById('register-input-group-label-password').style.color = 'black';
    document.getElementById('register-input-group-label-password-confirm').style.color = 'black';
}

function logout() {
    USER_ELEMENTS.thisUser.token = 0;
    insertUser(true);
    closeProfile()
}

function closeProfile() {
    let profileSlider = document.getElementById('profile-section');

    profileSlider.style.transform = 'translateY(100%)';
    fadeIn('navigation', 'flex')
    fadeIn('header', 'flex')
    fadeIn('login-or-register-section', 'flex')
}