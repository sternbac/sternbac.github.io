const teams = insightTeams["teams"];
const teamsContainer = document.querySelector("#insight-teams-display");
for(let i = 0; i < teams.length; i++){
    const team = teams[i];
    const teamString = `
        <a href="${team["href"]}" target="_blank">
            <div class="insight-team">
                <div class="insight-team-header">
                    <span class="text">${team["name"]}<span>
                    <br>
                    <span class="text insight-team-by"> By: ${team["by"]} </span>
                </div>
                <img src="./images/insight/${team["img"]}" class="insight-team-photo">
            </div>
        </a>
        `;

    teamsContainer.insertAdjacentHTML('beforeend', teamString);
}

const projectsContainer = document.querySelector("#past-projects-content");

const items = insightProjects["data"];
for(let i = 0; i < items.length; i++){
    const semester = items[i];
    // let eventString = `
    //     <div class="project">
    //         <a href="${entry.href}" target="_blank">${entry.text}</a>
    //     </div>`;
    //     projectsContainer.insertAdjacentHTML('beforeend', eventString);
    let semesterString = `
        <div class="semester" id="${semester.id}">
            <div class="semester-header" data-sem="${semester.id}">
                <div class="semester-icon"> + </div>
                <div class="semester-text">
                    <span class="text">${semester.semester}</span>
                </div>
            </div>
            <div class="projects">
    `;

    const projects = semester.projects;
    for(let j = 0; j < projects.length; j++){
        const project = projects[j];
        const projectString = `
            <div class="project">
                <a href="${project.href}" target="_blank">${project.text}</a>
            </div>
        `;
        semesterString += projectString;
    }
    projectsContainer.insertAdjacentHTML('beforeend', semesterString);
}

const semesters = document.querySelectorAll(".semester > .semester-header");
semesters.forEach((s) => {
    s.addEventListener('click', () => {
        s.classList.toggle("pressed-semester");
        let sem = s.dataset.sem;
        let months = document.querySelector(`#${sem} .projects`);
        let icon = document.querySelector(`#${sem} .semester-icon`);

        if(!s.classList.contains("pressed-semester")){
            icon.innerHTML = "+";
            months.classList.remove("showing");
        } else {
            icon.innerHTML = "-";
            months.classList.add("showing");
        }
    });
});
