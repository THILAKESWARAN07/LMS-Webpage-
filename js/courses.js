
const courses = [
    {
        name: "Javascript",
        instructor: "PS",
        status: "Active"
    },
    {
        name: "Python",
        instructor: "PS",
        status: "Completed"
    },
    {
        name: "Java",
        instructor: "PS",
        status: "Active"
    },
    {
        name: "Git",
        instructor: "PS",
        status: "Completed"
    }
];

const courseContainer = document.getElementById("courseContainer");

const renderCourses = () => {
    courses.forEach((course) => {

        const card = document.createElement("div");
        card.classList.add("course-card");


        let statusClass = "";
        if (course.status === "Active") {
            statusClass = "status-active";
        } else {
            statusClass = "status-completed";
        }

        card.innerHTML = `
            <h3>${course.name}</h3>
            <p>Instructor: ${course.instructor}</p>
            <span class="status ${statusClass}">
                ${course.status}
            </span>
        `;

        courseContainer.appendChild(card);
    });
};

renderCourses();
