for(let key in insightTeams){
    const teams = insightTeams[key];
    const teamsContainer = document.querySelector(`#insight-${key}-teams-display`);
    for(let i = 0; i < teams.length; i++){
        const team = teams[i];
        const teamString = `
            <div class="column">
            <a href="${team["href"]}" target="_blank" class="insight-team">
                <div class="insight-team-header">
                    <span class="text white">${team["name"]}<span>
                    <br>
                    <span class="text insight-team-by"> By: ${team["by"]} </span>
                </div>
                <img src="./images/insight/${team["img"]}" class="insight-team-photo">
            </a>
            </div>
        `;
        teamsContainer.insertAdjacentHTML('beforeend', teamString);
    }
}

for(let key in insightMembers){
    const members = insightMembers[key];
    const membersContainer = document.querySelector(`#insight-${key}-members-display`);
    for(let i = 0; i < members.length; i++){
        const member = members[i];
        const memberString = `
            <div class="profile">
                <img src="./images/insight/${member["img"]}" class=${key==="leader" ? "profile-photo-small" : "profile-photo"}>
                <div class="profile-details">
                    <span>${member["name"]}<span>
                    <br>
                    <span>${member["pos"]}<span>
                </div>
            </div>
        `;
        membersContainer.insertAdjacentHTML('beforeend', memberString);
    }
}

// const projectsContainer = document.querySelector("#past-projects-content");
// const items = insightProjects["data"];
// for(let i = 0; i < items.length; i++){
//     const semester = items[i];
//     let semesterString = `
//         <div class="semester" id="${semester.id}">
//             <div class="semester-header" data-sem="${semester.id}">
//                 <div class="semester-icon"> + </div>
//                 <div class="semester-text">
//                     <span class="text">${semester.semester}</span>
//                 </div>
//             </div>
//             <div class="projects">
//     `;

//     const projects = semester.projects;
//     for(let j = 0; j < projects.length; j++){
//         const project = projects[j];
//         const projectString = `
//             <div class="project">
//                 <a href="${project.href}" target="_blank">${project.text}</a>
//             </div>
//         `;
//         semesterString += projectString;
//     }
//     projectsContainer.insertAdjacentHTML('beforeend', semesterString);
// }
// const semesters = document.querySelectorAll(".semester > .semester-header");
// semesters.forEach((s) => {
//     s.addEventListener('click', () => {
//         s.classList.toggle("pressed-semester");
//         let sem = s.dataset.sem;
//         let months = document.querySelector(`#${sem} .projects`);
//         let icon = document.querySelector(`#${sem} .semester-icon`);

//         if(!s.classList.contains("pressed-semester")){
//             icon.innerHTML = "+";
//             months.classList.remove("showing");
//         } else {
//             icon.innerHTML = "-";
//             months.classList.add("showing");
//         }
//     });
// });

const sections = document.querySelectorAll(".section > .dropdown-header");
sections.forEach((s) => {
    s.addEventListener('click', () => {
        let topic = s.id.slice(0,-7);
        let icon = document.querySelector(`#${topic}-header .icon`);
        let content = document.querySelector(`#${topic}-content`);
        let header = document.querySelector(`#${topic}-header`);

        s.classList.toggle("pressed-section");
        if(!s.classList.contains("pressed-section")){
            icon.innerHTML = "+";
            content.classList.remove("showing");
            header.classList.remove("active-dropdown");
        } else {
            icon.innerHTML = "-";
            content.classList.add("showing");
            header.classList.add("active-dropdown");
        }
    });
});