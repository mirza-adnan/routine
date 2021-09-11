const date = document.querySelector(".date");
const offlineBtn = document.querySelector(".offline-btn");
const onlineBtn = document.querySelector(".online-btn");
const offlineGrid = document.querySelector(".offline-grid");
const onlineGrid = document.querySelector(".online-grid");

offlineBtn.addEventListener("click", () => {
    onlineBtn.classList.remove("active");
    onlineGrid.classList.remove("active");
    offlineBtn.classList.add("active");
    offlineGrid.classList.add("active");
});

onlineBtn.addEventListener("click", () => {
    offlineBtn.classList.remove("active");
    offlineGrid.classList.remove("active");
    onlineBtn.classList.add("active");
    onlineGrid.classList.add("active");
});

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
