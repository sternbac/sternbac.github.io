const activeMonths = [ 'February', 'March', 'April', 'September', 'October', 'November', 'December'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function get_month_name(monthNumber) {
    return months[monthNumber];
}

(() => {
    const api = "//bac-backend.herokuapp.com/calendar/3";
    const req = new XMLHttpRequest();

    let monthDict = {};
    
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            const items = response["data"];
            for(let i = 0; i < items.length; i++){
                let entry = items[i];
                if(activeMonths.includes(entry.month)){
                    let _monthContainer = document.getElementById(`${entry.month}`);
                    let eventString = `
                        <div class="content-block-container">
                            <div class="overlay"></div>
                            <div class="content-block">
                                <div class="content-block-header">
                                    ${entry.title}
                                </div>
                                <div class="content-block-body">
                                    <img src="icons/vip-pass.svg" class="content-icon">
                                    ${entry.time}
                                    <br>
                                    ${entry.location}
                                </div>
                            </div>
                        </div>`;
                    _monthContainer.insertAdjacentHTML('beforeend', eventString);
                }
            }
        }
    };

    req.open('GET', api);
    req.send();
})();


const semesters = document.querySelectorAll(".semester > .semester-header");
semesters.forEach((s) => {
    s.addEventListener('click', () => {
        s.classList.toggle("pressed-semester");
        let sem = s.dataset.sem;
        let months = document.querySelector(`#${sem} .months`);
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