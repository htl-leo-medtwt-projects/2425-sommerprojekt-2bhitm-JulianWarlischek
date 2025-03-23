/**
 * Dynamic content of calendar.html
 */

function loadDate() {
    const date = new Date()

    const calendar_weekday_inner = document.getElementById('calendar-weekday');
    const day_of_week = date.getDay()

    calendar_weekday_inner.innerHTML = CALENDAR_ELEMENTS.weekday[(day_of_week + 6) % 7];

    const calendar_date_inner = document.getElementById('calendar-date');
    const date_nums = `${date.getDate()}.${date.getMonth() + 1}`

    calendar_date_inner.innerHTML = date_nums;

    const calendar_dayOfMonth_inner = document.getElementById('calendar-dayOfMonth');
    const day_of_month = date.getMonth()

    calendar_dayOfMonth_inner.innerHTML = CALENDAR_ELEMENTS.month[day_of_month];

    const calendar_time_inner = document.getElementById('calendar-time-now');
    const time = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;

    calendar_time_inner.innerHTML = time;

    const calendar_dateTime_inner = document.getElementById('calendar-time-dayTime');
    const dayTime = mapTime(date.getHours());

    calendar_dateTime_inner.innerHTML = dayTime;
}
loadDate()
setInterval(loadDate, 1500)


function loadEventsOfCalendar() {
    document.getElementById('add-session').addEventListener('click', changeCalendarUI)
}
loadEventsOfCalendar()

function loadCategories() {
    const category_box = document.getElementById('training-categories')

    let temp_string = "";

    for (let i = 0; i < CALENDAR_ELEMENTS.types.length; i++) {
        temp_string += `
        <div class="category">
            <div class="category-icon">
                ${CALENDAR_ELEMENTS.types[i].icon}
            </div>
            <h3>${CALENDAR_ELEMENTS.types[i].name}</h3>
        </div>
        `
    }

    category_box.innerHTML += temp_string;
}
loadCategories()

/**
 * Mapping Function
 * 
 * Maps the current time into one out of 3 day times ("Morning", "Noon", "Afternoon", "Evening", "Night")
 */
function mapTime(hour) {
    let value;

    if (hour >= 6 && hour < 12) {
        value = 0;  // 06:00 - 11:59
    } else if (hour >= 12 && hour < 14) {
        value = 1;     // 12:00 - 13:59
    } else if (hour >= 14 && hour < 17) {
        value = 2; // 14:00 - 16:59
    } else if (hour >= 17 && hour < 22) {
        value = 3;   // 17:00 - 21:59
    } else {
        value = 4;     // 22:00 - 05:59
    }

    return CALENDAR_ELEMENTS.day_times[value];
}

/**
 * Changes the UI of the calendar sessions
 */
function changeCalendarUI() {
    CALENDAR_ELEMENTS.state = CALENDAR_ELEMENTS.state === 1 ? -1 : 1;

    const state = CALENDAR_ELEMENTS.state;

    const headline = document.getElementById('trainings-today-header-headline');
    const close_or_open = document.getElementById('add-session');
    const listed_items = document.getElementById('trainings-today-listed')
    const input_field = document.getElementById('calendar-input-field')

    if (state === 1) {
        headline.innerHTML = 'Todays training sessions';
        close_or_open.style.transform = 'rotate(0deg)'
        listed_items.style.display = 'flex'
        input_field.style.display = 'none';
    } else {
        headline.innerHTML = 'Add training session';
        close_or_open.style.transform = 'rotate(45deg)'
        listed_items.style.display = 'none'
        input_field.style.display = 'flex';
    }
}