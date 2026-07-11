const menuEl = document.getElementById("menu");
const listEl = document.getElementById("list");
const overlayEl = document.getElementById("overlay");
const linkEl = document.querySelectorAll(".item a");

linkEl.forEach(link => {
    if (screen.width <= 850) {
        link.addEventListener("click", menuToggle);
    }
})
overlayEl.addEventListener("click", menuToggle);
menuEl.addEventListener("click", menuToggle);

function menuToggle() {
    listEl.classList.toggle("show-menu");
    menuEl.classList.toggle("fa-x");
    overlayEl.classList.toggle("overlay");
}

const projects =
    [
        {
            projectImageURL: "./assets/liveobject.png",
            projectName: "live obejct detection",
            projectTags: ["python","ai"],
            projectURL: "https://github.com/Shivkumarsaha/live-object-detection.git",
            codeURL: "https://github.com/Shivkumarsaha/live-object-detection/blob/main/camtest.py",
            challenge: "YOLOv8 & OpenCV"
            
        }
        ,
        {
            projectImageURL: "./assets/stdgradesystem.png",
            projectName: "Student Grade Management System",
            projectTags: ["JAVA","Swing","MySQL"],
            projectURL: "https://github.com/Shivkumarsaha/student-grade-management-system.git",
            codeURL: "https://github.com/Shivkumarsaha/student-grade-management-system/blob/main/src/ui/StudentGradeManagementSystem.java",
            challenge: "Java Swing & MySQL"
         }
         ,
         {
          projectImageURL: "./assets/lock.jpeg",
            projectName: "RFID And Keypad Based Door Lock System",
            projectTags: ["ArduinoUno","RFID","Sensor"],
            projectURL: "https://github.com/Shivkumarsaha/RFID-and-Kepad-Based-Door-Lock-System-Using-Arduino/tree/main/RFID-Keypad-Smart-Door-Lock-IoT",
            codeURL: "https://github.com/Shivkumarsaha/RFID-and-Kepad-Based-Door-Lock-System-Using-Arduino/blob/main/RFID-Keypad-Smart-Door-Lock-IoT/FINAL%20CODE%20OF%20IOT.txt",
            challenge: "Arduino & RFID"
         }
    ]


const projectsEl = document.getElementById("projects");
const loadMoreEl = document.getElementById("load-more");
let currentItem = 0;
loadProjects();

loadMoreEl.addEventListener("click", () => {
    loadProjects();
})

function loadProjects() {
    for (var i = currentItem; i < currentItem + 3; i++) {
        if (i === projects.length) {
            loadMoreEl.disabled = "true";
            break;
        }
        var li = document.createElement("li");
        li.classList.add("project");
        li.innerHTML = `
                        <div class="pro-img">
                            <img src="${projects[i].projectImageURL}" loading="lazy" alt="${projects[i].projectName} image">
                        </div>
                        <h3 class="pro-title">${projects[i].projectName}</h3>
                        <ul class="tags">
                        </ul >
           
            <div class="actions">
                <a href="${projects[i].projectURL}" class="btn primary">View
                    Project</a>
                <a href="${projects[i].codeURL}" class="btn secondary">View
                    code</a>
            </div>`;
        projectsEl.appendChild(li);
    }
    const tagsEl = document.querySelectorAll(".tags");
    for (var i = currentItem; i < currentItem + 3; i++) {
        if (i === projects.length)
            break
        for (var j = 0; j < projects[i].projectTags.length; j++) {
            var li = document.createElement("li");
            li.classList.add("tag", projects[i].projectTags[j].toLowerCase());
            li.innerText = projects[i].projectTags[j];
            tagsEl[i].appendChild(li);
        }
    }
    currentItem += 3;
}

