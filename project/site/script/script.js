/**
 * INDEX_ELEMENTS:
 * 
 * Elements and values of the index.html file.
 */
let INDEX_ELEMENTS = {
}

/**
 * TRAINING_ELEMENTS:
 * 
 * Elements and values of the training.html file.
 */
let TRAINING_ELEMENTS = {
    sections_output: document.getElementById('section-flex'),
    number_of_sections: 4,
    section_backgrounds: [
        '../images/plan_your_training.jpg',
        '../images/start_your_training.jpg'
    ]
}


/**
 * Dynamic content of index.html
 */
function loadIndex() { }

/**
 * Dynamic content of training.html
 */
function loadSections() {
    let temp_string = "";

    for (let i = 0; i < TRAINING_ELEMENTS.number_of_sections - 2; i++) {
        temp_string += `
        <div class="section-box" style="background-image: url('${TRAINING_ELEMENTS.section_backgrounds[i]}');">
        </div>
        `
        console.log(temp_string);
        
    }

    TRAINING_ELEMENTS.sections_output.innerHTML = temp_string;
}
loadSections()