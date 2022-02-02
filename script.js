const dateDisplay = document.querySelector(".date");
const offlineBtn = document.querySelector(".offline-btn");
const onlineBtn = document.querySelector(".online-btn");
const offlineGrid = document.querySelector(".offline-grid");
const onlineGrid = document.querySelector(".online-grid");
const allCells = document.querySelectorAll(".grid-cell");
const teachersList = document.querySelector(".teachers-list");
const emptyListItem = document.querySelector(".empty");
const searchBtn = document.querySelector(".search-btn");
const modalBg = document.querySelector(".modal-bg");
const searchBar = document.querySelector(".search-bar");
const searchPopup = document.querySelector(".search-popup");

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

const teachers = [
    {
        name: "TU",
        subject: "Physics",
        link: "https://us04web.zoom.us/j/4078407985?pwd=T2R1Um5Tb3VhQnhVNUg0M0NqakVLQT09",
    },
    {
        name: "MHA",
        subject: "Bangla",
        link: "https://us04web.zoom.us/j/5681220921?pwd=eUlTTGZtRHdvTTJhSzJkcmdPSTRYdz09",
    },
    {
        name: "GCS",
        subject: "Chemistry",
        link: "https://us04web.zoom.us/j/4096669370?pwd=MFQreWtOL1BYczMyR25ZRE9YeGhtdz09",
    },
    {
        name: "LYM",
        subject: "H.Maths",
        link: "https://us04web.zoom.us/j/8092247515?pwd=S0NJRVVxOVBVNkFMcFNFZmVtazh6dz09",
    },
    {
        name: "AA",
        subject: "H.Maths",
        link: "https://us04web.zoom.us/j/6494909022?pwd=bkxoMGtnckpTTkp2ZXpOaTBJdXRGZz09",
    },
    {
        name: "FR",
        subject: "English",
        link: "https://us04web.zoom.us/j/6442635633?pwd=V1JNS0ZJWmNDbUFqQlByTGFyWG04Zz09",
    },
    {
        name: "YK",
        subject: "Statistics",
        link: "https://us04web.zoom.us/j/9713219788?pwd=M1dSK0cxOXRqTGh1Y1dyZFZ4aVpVQT09",
    },
    {
        name: "RAI",
        subject: "ICT",
        link: "https://us04web.zoom.us/j/6166730587?pwd=VlFKYXozM1dxeFozTS9IeVd5MlZrZz09",
    },
    {
        name: "MRN",
        subject: "Chemistry",
        link: "https://us05web.zoom.us/j/6361159489?pwd=bVlXTU9LKzBUVWxJR1VkS01Ea0dDUT09",
    },
    {
        name: "FAJ",
        subject: "Biology",
        link: "https://us04web.zoom.us/j/4023038623?pwd=QUs4WHk5MWwwdkdzSEVUWCt4K21YUT09",
    },
    {
        name: "FRN",
        subject: "English",
        link: "https://us04web.zoom.us/j/2134182170?pwd=VVNtdDd0VGNJU1RlMmk2eUEyV0hRdz09",
    },
    {
        name: "MHB",
        subject: "English",
        link: "https://us04web.zoom.us/j/5887996472?pwd=VHNkUlF5V25YY1lPd3E2UDN3b3BrQT09",
    },
    {
        name: "MN",
        subject: "Bangla",
        link: "https://us04web.zoom.us/j/6828883046?pwd=RGlCc0JqMmlNaGtxY1I4L1RPNWVUZz09",
    },
    {
        name: "MNI",
        subject: "H.Maths",
        link: "https://us04web.zoom.us/j/6199024532?pwd=MWJTUFFQcTZKMmF4b1VabXh1YzdGZz09",
    },
    {
        name: "MRC",
        subject: "ICT",
        link: "https://us05web.zoom.us/j/3409323190?pwd=dlN3NEdQbXlVSThnWDdUNktaTkt3Zz09",
    },
    {
        name: "MS",
        subject: "Bangla",
        link: "https://us04web.zoom.us/j/3187225592?pwd=aDdwbFNWWDVpTW5kVXd5bEJvQXM4QT09",
    },
    {
        name: "MU",
        subject: "BGS",
        link: "https://us04web.zoom.us/j/9735527253?pwd=cUxHSzY2NWlwN1ZPeEYydncxT0tSdz09",
    },
    {
        name: "MZI",
        subject: "Chemistry",
        link: "https://us04web.zoom.us/j/8068605560?pwd=bWFjQTFXNVpiRzRDUGh2OUlIaE9zdz09",
    },
    {
        name: "NA",
        subject: "English",
        link: "https://us04web.zoom.us/j/6232879868?pwd=NmRtK0ZMblhIYktlSU8xQ2NhRmhFZz09",
    },
    {
        name: "NC",
        subject: "Physics",
        link: "https://us04web.zoom.us/j/9443918403?pwd=ZERtMDRYNU5QTlhSb2ZqbG9jbjIwQT09",
    },
    {
        name: "NR",
        subject: "H.Maths",
        link: "https://us04web.zoom.us/j/3163761234?pwd=NWgyb0ZZV2lrcDc2aXpQa2pLOXU2QT09",
    },
    {
        name: "SB",
        subject: "Bangla",
        link: "https://us05web.zoom.us/j/2507723528?pwd=eld5UEU4bkNXNTdJQUF6VnZ0bVBwQT09",
    },
    {
        name: "SM",
        subject: "English",
        link: "https://us04web.zoom.us/j/9931134474?pwd=ZzR4MXJhQ242UFg4SngxOGh3QWx3UT09",
    },
    {
        name: "SY",
        subject: "BGS",
        link: " https://us04web.zoom.us/j/6421787648?pwd=MVZOL2dYd2g3Y2E2Uk9FWFdVaHgrZz09",
    },
    {
        name: "SZK",
        subject: "H.Maths",
        link: "https://us04web.zoom.us/j/2943572024?pwd=VGJhMUV4UFBLdy90bUloYzZMaVZWZz09",
    },
    {
        name: "ZI",
        subject: "Physics",
        link: "https://us04web.zoom.us/j/8544695231?pwd=UTVrSXFiT052L1B3MEcrRTAxQzc0Zz09",
    },
    {
        name: "ZUR",
        subject: "H.Maths",
        link: "https://us04web.zoom.us/j/4551005337?pwd=dGQwRlZCVXRLZ0x3dDU3KzFWMFJadz09",
    },
    {
        name: "MSR",
        subject: "H.Maths",
        link: "https://us02web.zoom.us/j/6451973214#success",
    },
    {
        name: "ZC",
        subject: "Chemistry",
        link: "https://us02web.zoom.us/j/2496158171?pwd=NW9US0FndTVvS3dabGoxY2xOOVRGUT09",
    },
];

const teachersSorted = teachers.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

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
    if (hour >= limit && dayIndex === 4) {
        dayLower = days[(dayIndex + 2) % 7].toLowerCase();
    } else if (hour >= limit || (hour < limit && dayIndex === 5)) {
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

function showModal() {
    modalBg.style.display = "flex";
}

function hideModal() {
    modalBg.style.display = "none";
}

function loadSearchOptions() {
    teachersSorted.forEach((teacher) => {
        const li = document.createElement("li");
        li.classList.add("list-item");

        const icon = document.createElement("i");
        icon.className = "fas fa-user-alt";

        li.appendChild(icon);

        const hyperlink = document.createElement("a");
        hyperlink.href = teacher.link;
        hyperlink.classList.add("list-link");
        hyperlink.textContent = teacher.name;
        hyperlink.appendChild(document.createElement("br"));

        const span = document.createElement("span");
        span.textContent = teacher.subject;

        hyperlink.appendChild(span);

        teacher.element = li;

        li.appendChild(hyperlink);

        teachersList.insertBefore(li, emptyListItem);
    });
}

function search(e) {
    const { value } = e.target;

    teachersSorted.forEach((teacher) => {
        const isVisible = teacher.name
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase());

        if (!isVisible) teacher.element.style.display = "none";
        else teacher.element.style.display = "flex";
    });
}
function showAllTeachers() {
    teachersSorted.forEach((teacher) => {
        teacher.element.style.display = "flex";
    });
}

searchBtn.addEventListener("click", showModal);
modalBg.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-bg")) {
        searchBar.value = "";
        hideModal();
        showAllTeachers();
    }
});

searchBar.addEventListener("input", search);
searchBar.addEventListener("focus", () => {
    if (screen.height <= 480) {
        searchPopup.style.transform = "translateY(10%)";
    }
});
searchBar.addEventListener("focusout", () => {
    if (screen.height <= 480) {
        searchPopup.style.transform = "translateY(0%)";
    }
});

offlineBtn.addEventListener("click", displayOfflineGrid);
onlineBtn.addEventListener("click", displayOnlineGrid);

loadSearchOptions();
updateDate();
setInterval(updateDate, 1000);
