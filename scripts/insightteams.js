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

const teams = insightTeams["teams"];
const membersContainer = document.querySelector("#insight-teams-display");
for(let i = 0; i < teams.length; i++){
    const members = teams[i]["members"];
    const teamHeader = `
        <div class="team-header">
            <span class="text">Team ${i + 1} </span>
        </div>`;
    membersContainer.insertAdjacentHTML('beforeend', teamHeader);
    let fullMembers = "<div class='members'>";
    for(let j = 0; j < members.length; j++){
        const member = members[j];
        const memberString = `
            <div class="member">
            <img class="member-img" src="images/insight/${member.img}">
            <div class="member-content">
                <div class="member-info charcoal">
                    <div class="member-name">
                        <span class="text"> ${member.name} </span>
                    </div>
                    <div class="member-bio">
                        <span class="text">${member.school} </span>
                    </div>
                </div>
            </div>
        </div>`;
        fullMembers += memberString;
        
    }
    fullMembers += "</div>";
    membersContainer.insertAdjacentHTML('beforeend', fullMembers);
}

const projectsContainer = document.querySelector("#past-projects-content .projects");

const items = insightProjects["projects"];
for(let i = 0; i < items.length; i++){
    let entry = items[i];
    let eventString = `
        <div class="project">
            <a href="${entry.href}" target="_blank">${entry.text}</a>
        </div>`;
        projectsContainer.insertAdjacentHTML('beforeend', eventString);
    
}