const dateDisplay = document.querySelector(".date");
const offlineBtn = document.querySelector(".offline-btn");
const onlineBtn = document.querySelector(".online-btn");
const offlineGrid = document.querySelector(".offline-grid");
const onlineGrid = document.querySelector(".online-grid");
const allCells = document.querySelectorAll(".grid-cell");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function updateDate() {
    const today = new Date();
    const dayIndex = today.getDay();
    const day = days[dayIndex];
    const month = months[today.getMonth()];
    const date = String(today.getDate());
    const year = String(today.getFullYear());
    dateDisplay.textContent = `${day}, ${month} ${date}, ${year}`;

    const hour = today.getHours();
    const limit = 12;
    let dayLower;
    if (hour > limit && dayIndex === 4) {
        dayLower = days[(dayIndex + 2) % 7].toLowerCase();
    } else if (hour > limit || (hour < limit && dayIndex === 5)) {
        dayLower = days[(dayIndex + 1) % 7].toLowerCase();
    } else if (hour < limit) {
        dayLower = day.toLowerCase();
    }

    allCells.forEach((cell) => {
        if (cell.classList.contains(dayLower)) {
            cell.classList.add("active");
        } else {
            cell.classList.remove("active");
        }
    });
}

function displayOfflineGrid() {
    onlineBtn.classList.remove("active");
    onlineGrid.classList.remove("active");
    offlineBtn.classList.add("active");
    offlineGrid.classList.add("active");
}

function displayOnlineGrid() {
    offlineBtn.classList.remove("active");
    offlineGrid.classList.remove("active");
    onlineBtn.classList.add("active");
    onlineGrid.classList.add("active");
}

offlineBtn.addEventListener("click", displayOfflineGrid);
onlineBtn.addEventListener("click", displayOnlineGrid);

updateDate();
setInterval(updateDate, 1000);
