const time = document.querySelector(".date");

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

let today = new Date();

let day = days[today.getDay()];
let month = months[today.getMonth()];
let date = String(today.getDate());
let year = String(today.getFullYear());

time.textContent = `${day}, ${month} ${date}, ${year}`;
