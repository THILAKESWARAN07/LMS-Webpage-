const dashboardData = [
    { title: "Total Courses", value: 6 },
    { title: "Assignments Due", value: 1 },
    { title: "Attendance", value: "92%" },
    { title: "GPA", value: "7.5" }
];

const cardsContainer = document.getElementById("dashboardCards");

const renderDashboardCards = () => {
    dashboardData.forEach((item) => {
      
        const card = document.createElement("div");
        card.classList.add("dashboard-card");

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.value}</p>
        `;

        cardsContainer.appendChild(card);
    });
};

renderDashboardCards();
