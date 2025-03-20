/**
 * Dynamic content of training.html
 */
//style="background-image: url('${TRAINING_ELEMENTS.section_backgrounds[i]}');"
function loadSections() {
    let temp_string = "";

    for (let i = 0; i < TRAINING_ELEMENTS.number_of_sections; i++) {
        temp_string += `
        <div class="section-box" id="section-${i + 1}">
            <div class="section-overlay ${i % 2 === 0 ? 'white-overlay' : 'darkblue-overlay'}">
            </div>
            <img src="${TRAINING_ELEMENTS.section_backgrounds[i]}"/>
            <div class="section-label-box ${i % 2 === 0 ? 'section-label-left' : 'section-label-right'}"><h3>${TRAINING_ELEMENTS.section_headlines[i]}</h3></div>
        </div>
        `
    }

    TRAINING_ELEMENTS.sections_output.innerHTML = temp_string;
}
loadSections()