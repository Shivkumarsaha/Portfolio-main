// =========================
// MOBILE MENU
// =========================

const menuEl = document.getElementById("menu");
const listEl = document.getElementById("list");
const overlayEl = document.getElementById("overlay");
const linkEl = document.querySelectorAll(".item a");

linkEl.forEach(link => {
    if (window.innerWidth <= 850) {
        link.addEventListener("click", menuToggle);
    }
});

overlayEl.addEventListener("click", menuToggle);
menuEl.addEventListener("click", menuToggle);

function menuToggle() {
    listEl.classList.toggle("show-menu");
    menuEl.classList.toggle("fa-x");
    overlayEl.classList.toggle("overlay");
}

// =========================
// PROJECTS
// =========================

const projects = [
    {
        projectImageURL: "./assets/liveobject.png",
        projectName: "Live Object Detection",
        projectTags: ["Python", "AI"],
        projectURL: "https://github.com/Shivkumarsaha/live-object-detection.git",
        codeURL: "https://github.com/Shivkumarsaha/live-object-detection/blob/main/camtest.py",
        challenge: "YOLOv8 & OpenCV"
    },
    {
        projectImageURL: "./assets/stdgradesystem.png",
        projectName: "Student Grade Management System",
        projectTags: ["Java", "Swing", "MySQL"],
        projectURL: "https://github.com/Shivkumarsaha/student-grade-management-system.git",
        codeURL: "https://github.com/Shivkumarsaha/student-grade-management-system/blob/main/src/ui/StudentGradeManagementSystem.java",
        challenge: "Java Swing & MySQL"
    },
    {
        projectImageURL: "./assets/lock.jpeg",
        projectName: "RFID And Keypad Based Door Lock System",
        projectTags: ["Arduino", "RFID", "Sensor"],
        projectURL: "https://github.com/Shivkumarsaha/RFID-and-Kepad-Based-Door-Lock-System-Using-Arduino/tree/main/RFID-Keypad-Smart-Door-Lock-IoT",
        codeURL: "https://github.com/Shivkumarsaha/RFID-and-Kepad-Based-Door-Lock-System-Using-Arduino/blob/main/RFID-Keypad-Smart-Door-Lock-IoT/FINAL%20CODE%20OF%20IOT.txt",
        challenge: "Arduino & RFID"
    }
];

const projectsEl = document.getElementById("projects");
const loadMoreEl = document.getElementById("load-more");

let currentItem = 0;

loadProjects();

loadMoreEl.addEventListener("click", loadProjects);

function loadProjects() {

    for (let i = currentItem; i < currentItem + 3; i++) {

        if (i >= projects.length) {
            loadMoreEl.disabled = true;
            loadMoreEl.innerText = "No More Projects";
            break;
        }

        const li = document.createElement("li");

        li.classList.add("project");

        li.innerHTML = `
            <div class="pro-img">
                <img src="${projects[i].projectImageURL}" alt="${projects[i].projectName}" loading="lazy">
            </div>

            <h3 class="pro-title">${projects[i].projectName}</h3>

            <ul class="tags"></ul>

            <div class="actions">
                <a href="${projects[i].projectURL}" target="_blank" class="btn primary">
                    View Project
                </a>

                <a href="${projects[i].codeURL}" target="_blank" class="btn secondary">
                    View Code
                </a>
            </div>
        `;

        projectsEl.appendChild(li);
    }

    const tagsEl = document.querySelectorAll(".tags");

    for (let i = currentItem; i < currentItem + 3; i++) {

        if (i >= projects.length) break;

        projects[i].projectTags.forEach(tag => {

            const tagLi = document.createElement("li");

            tagLi.classList.add("tag");

            tagLi.innerText = tag;

            tagsEl[i].appendChild(tagLi);

        });

    }

    currentItem += 3;

}

// =========================
// EMAILJS CONTACT FORM
// =========================

// Initialize EmailJS
emailjs.init({
    publicKey: "5lttqa7hw2hNmKMWE"
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitBtn = contactForm.querySelector("button");

    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

emailjs.sendForm(
    "service_8mltrtr",  // Service ID
    "template_9zpdu09", // Template ID
    contactForm         // Form Element
)

    .then(() => {

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

    })

    .catch((error) => {

        console.error(error);

        alert("❌ Failed to send message.\n\nCheck your EmailJS Service ID and Template ID.");

    })

    .finally(() => {

        submitBtn.innerText = "Send";
        submitBtn.disabled = false;

    });

});