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

    if (currScroll > 50) {
        FITBALANCE_ELEMENTS.welcomeBox = document.getElementById('welcome-box');
        FITBALANCE_ELEMENTS.welcomeBox.style.width = "97%";
        FITBALANCE_ELEMENTS.welcomeBox.style.height = "20vh";
        FITBALANCE_ELEMENTS.welcomeBox.style.backgroundPosition = 'center -50%';
        FITBALANCE_ELEMENTS.welcomeBox.style.marginTop = 'calc(var(--margin-c-header))';
        document.removeEventListener('scroll', checkWelcomeBox)
    }
}

/**
 * Inits the questions
 */
function initQuestions() {
    let tempString = "";
    let questionOutput = document.getElementById('question-boxes');
    for (let i = 0; i < FITBALANCE_ELEMENTS.questions.length; i++) {
        tempString += `<div class="question-box" onclick="selectQuestion(${i})"><p>${FITBALANCE_ELEMENTS.questions[i].headline}</p></div>`
    }

    questionOutput.innerHTML = tempString;
    let questions = document.getElementsByClassName('question-box');

    for (let i = 0; i < questions.length; i++) {
        let random = 0;
        do {
            random = getRandom(FITBALANCE_ELEMENTS.questionColors.length, 0);
        } while (FITBALANCE_ELEMENTS.usedColors[random]);
        FITBALANCE_ELEMENTS.usedColors[random] = true;
        questions[i].style.border = `${FITBALANCE_ELEMENTS.questionColors[random].border} 2px solid`
        questions[i].style.backgroundColor = `${FITBALANCE_ELEMENTS.questionColors[random].bg}`
        questions[i].style.left = `${getRandom(30, 0)}%`

    }
}
initQuestions()

/**
 * Selects a question
 */
function selectQuestion(index) {
    let popUp = document.getElementById('pop-up');
    let questions = document.getElementsByClassName('question-box');

    popUp.style.backgroundColor = questions[index].style.backgroundColor;
    popUp.style.border = questions[index].style.border;
    

    popUp.innerHTML = `
                <h2>${FITBALANCE_ELEMENTS.questions[index].headline}</h2>
                <p>${FITBALANCE_ELEMENTS.questions[index].description}</p>
    `
    fadeIn('question-pop-up', 'flex')
}

function closeQuestion() {
    fadeOut('question-pop-up', 500)
}

/**
 * GSAP
 */
let sections = document.querySelectorAll('.fitbalance-explained-content');
for (let i = 0; i < sections.length; i++) {
    generateScrollAnimation(i);
}



function generateScrollAnimation(i){

    let element = sections[i];

    
    if(i%2 == 0) {
        
        gsap.set(element, {
            x: '-20%',
            scale: 0,
            opacity: 0,
            rotate: -30
        });
    } else {
        gsap.set(element, {
            x: '20%',
            scale: 0,
            opacity: 0,
            rotate: 30
        });
    }
    
    
    /* SET END KEY FRAME */
    gsap.to(element, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.7,
        rotate: 0,
        scrollTrigger: {
            trigger: element,
            start: '10% 150%', 
        }
    });
    
}