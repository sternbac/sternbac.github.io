const activeMonths = [
  "February",
  "March",
  "April",
  "September",
  "October",
  "November",
  "December",
];
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
function get_month_name(monthNumber) {
  return months[monthNumber];
}

(() => {
  const api = "//bac-backend.herokuapp.com/calendar/0";
  const req = new XMLHttpRequest();

  let monthDict = {};

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      const items = response["data"];
      for (let i = 0; i < items.length; i++) {
        let entry = items[i];
        if (
          activeMonths.includes(entry.month) &&
          entry.title !== "Weekly BAC Meeting"
        ) {
          let _monthContainer = document.getElementById(`${entry.month}`);
          const location = entry.location.slice(10);
          let prefix = "Location: ";
          let isLink = false;

          if (location.includes("http")) {
            isLink = true;
          }

          if (location.includes("bit")) {
            prefix = "Recording: ";
          }

          let eventString = `
                          <div class="content-block-container">
                              <div class="content-block">
                                  <div class="content-block-header">
                                      ${entry.title}
                                  </div>
                                  <div class="content-block-body">
                          `;

          if (entry.description !== undefined) {
            eventString += `
                              ${entry.description}
                              <br>
                              <br>
                          `;
          }
          if (isLink) {
            eventString += `
                ${entry.time}
                <br>
                ${prefix} <a target="_blank" href="${location}">${location}<a>
                </div>
              </div>
            </div>`;
          } else {
            eventString += `
                ${entry.time}
                <br>
                ${prefix} ${location}<a>
                </div>
              </div>
            </div>`;
          }
          _monthContainer.insertAdjacentHTML("beforeend", eventString);
        }
      }
    }
  };

  req.open("GET", api);
  req.send();
})();

const semesters = document.querySelectorAll(".semester > .semester-header");
semesters.forEach((s) => {
  s.addEventListener("click", () => {
    s.classList.toggle("pressed-semester");
    let sem = s.dataset.sem;
    let months = document.querySelector(`#${sem} .months`);
    let icon = document.querySelector(`#${sem} .semester-icon`);

    if (!s.classList.contains("pressed-semester")) {
      icon.innerHTML = "+";
      months.classList.remove("showing");
    } else {
      icon.innerHTML = "-";
      months.classList.add("showing");
    }
  });
});
