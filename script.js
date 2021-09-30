const date = document.querySelector(".date");
const offlineBtn = document.querySelector(".offline-btn");
const onlineBtn = document.querySelector(".online-btn");
const offlineGrid = document.querySelector(".offline-grid");
const onlineGrid = document.querySelector(".online-grid");

offlineBtn.addEventListener("click", displayOfflineGrid);
onlineBtn.addEventListener("click", displayOnlineGrid);

updateDate();
setInterval(updateDate, 1000);

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

function updateDate() {
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

    const today = new Date();
    const day = days[today.getDay()];
    const month = months[today.getMonth()];
    const currDate = String(today.getDate());
    const year = String(today.getFullYear());

    date.textContent = `${day}, ${month} ${currDate}, ${year}`;

    const dayLower = day.toLowerCase();

    const allCells = document.querySelectorAll(".grid-cell");
    allCells.forEach((cell) => {
        if (cell.classList.contains(dayLower)) {
            cell.classList.add("active");
        } else {
            cell.classList.remove("active");
        }
    });
}
