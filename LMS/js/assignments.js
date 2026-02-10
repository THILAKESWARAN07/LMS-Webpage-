const assignments = [
    {
        id: 1,
        title: "DSA",
        dueDate: "2026-02-15",
        submitted: true
    },
    {
        id: 2,
        title: "DBMS",
        dueDate: "2026-02-05",
        submitted: false
    },
    {
        id: 3,
        title: "OOPS",
        dueDate: "2026-02-08",
        submitted: true
    }
];

const container = document.getElementById("assignmentContainer");
const today = new Date();


const getStatus = (assignment) => {
    if (assignment.submitted) {
        return { text: "Submitted", class: "status-submitted" };
    }

    const due = new Date(assignment.dueDate);

    if (today > due) {
        return { text: "Late", class: "status-late" };
    }

    return { text: "Pending", class: "status-pending" };
};


const renderAssignments = () => {
    container.innerHTML = "";

    assignments.forEach((assignment) => {
        const card = document.createElement("div");
        card.classList.add("assignment-card");

        const status = getStatus(assignment);
        const buttonHTML = assignment.submitted
            ? `<button disabled>Submitted</button>`
            : `<button class="submit-btn" data-id="${assignment.id}">
                Submit Assignment
               </button>`;

        card.innerHTML = `
            <h3>${assignment.title}</h3>
            <p>Due: ${assignment.dueDate}</p>
            <span class="status ${status.class}">
                ${status.text}
            </span>
            <div class="btn-area">
                ${buttonHTML}
            </div>
        `;

        container.appendChild(card);
    });

    attachSubmitEvents();
};

const attachSubmitEvents = () => {
    const buttons = document.querySelectorAll(".submit-btn");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);

            const assignment = assignments.find(a => a.id === id);

            if (assignment) {
                assignment.submitted = true;
                showAlert("Assignment submitted successfully!", "success");

                renderAssignments();
            }
        });
    });
};
renderAssignments();
