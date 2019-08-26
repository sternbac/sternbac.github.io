const submitBtn = document.getElementById('submit-btn');
const submitBtnSpan = document.querySelector('#submit-btn > span');
const submitNetID = document.getElementById('membership-input');
const reply = document.getElementById('reply-status');

submitBtn.addEventListener('click', (event) => {
    handleMembershipSubmit(event);
});

const attendanceMsg = document.querySelector("#attendance-msg");
const additionalInfo = document.querySelector("#additional-info");

function handleMembershipSubmit(event){
    event.preventDefault();
    const NetID = document.getElementById("membership-input").value;
    const api = "//bac-backend.herokuapp.com/attendance/" + NetID;
    const req = new XMLHttpRequest();
    
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            attendanceMsg.innerHTML = response["attendanceMsg"];
            additionalInfo.innerHTML = response["additionalInfo"];
        }
    };

    req.open('GET', api);
    req.send();
    attendanceMsg.innerHTML = "Loading...";
    additionalInfo.innerHTML = "";
    reply.style.display = "block";
}