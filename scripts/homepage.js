
(() => {

    const api = "//bac-backend.herokuapp.com/calendar/3";
    const req = new XMLHttpRequest();
    
    const loading = document.querySelector(".loading");

    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            const items = response["data"];
            const eventsContainer = document.getElementById("events-content");
            loading.style.display = 'none';
            for(let i = 0; i < items.length; i++){
                const item = items[i];

                let itemString = `
                    <div class="content-block-container">
                        <div class="overlay"></div>
                        <div class="content-block">
                            <div class="content-block-header">
                                ${item.title}
                            </div>
                            <div class="content-block-body">
                    `;

                if(item.description !== undefined){
                    itemString += `
                        ${item.description}
                        <br>
                        <br>
                    `;
                }

                itemString += `
                            ${item.time}
                            <br>
                            ${item.location}
                        </div>
                    </div>
                </div>`;
                eventsContainer.insertAdjacentHTML('beforeend', itemString);
            }
        }
    };

    req.open('GET', api);
    req.send();
    loading.style.display = 'block';

    const members = board["board"];
    const membersContainer = document.querySelector("#board-container > .members");
    for(let i = 0; i < members.length; i++){
        const member = members[i];
        const memberString = `
            <div class="member">
            <img class="member-img" src="images/board/${member.img}">
            <div class="member-content">
                <div class="member-info">
                    <div class="member-name">
                        <span class="text"> ${member.name} </span>
                    </div>
                    <div class="member-bio">
                        <span class="text">${member.title}</span>
                        <br>
                        <span class="text">${member.school} </span>
                        <br>
                        <span class="text">${member.degree} </span>
                    </div>
                </div>
            </div>
        </div>
        `;
        membersContainer.insertAdjacentHTML('beforeend', memberString);
    }
    
})();


const subscribeBtn = document.getElementById('subscribe-btn');
const subscribeBtnSpan = document.querySelector('#subscribe-btn > span');
const subscribeEmail = document.getElementById('subscribe-input');
const thanksSub = document.getElementById('thanks-sub');

subscribeBtn.addEventListener('click', (event) => {
    handleEmailSubmit(event);
});

const time = 1000 * 10;

function animateBtn() {
    subscribeBtn.animate([
        { backgroundPosition: "0% 0%" },
        { backgroundPosition: "100% 100%" }
    ], {
        fill: 'both',
        duration: time
    });
}

function handleEmailSubmit(event){
    event.preventDefault();
    let doneSubmitting = false;
    animateBtn();
    const animation = setInterval(animateBtn, time);

    const email = document.getElementById("subscribe-input").value;
    const api = "//bac-backend.herokuapp.com/subscribe/";
    const req = new XMLHttpRequest();
    
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            clearInterval(animation);
            subscribeBtn.style.display = "none";
            thanksSub.style.display = "block";
        }
    };

    req.open('POST', api, true);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send(`email=${email}`);
    subscribeEmail.style.display = "none";
    subscribeBtnSpan.style.display = "none";
}

const signUpBtn = document.querySelector("#signup-link");
const subscribeContainer = document.querySelector("#subscribe-container");

signUpBtn.addEventListener('click', () => {
    scroll();
});

function scroll() {
    if ('requestAnimationFrame' in window === false) {
        body.scrollTo(0, body.scrollHeight);
        return;
    }

    const subscribeBtnOffset = body.scrollHeight;

    body.scrollTo(0, body.scrollTop + 50);

    const bodyViewport = body.clientHeight;
    let bodyOffset = body.scrollTop + bodyViewport;

    if(subscribeBtnOffset <= bodyOffset){
        return;
    } else {
        requestAnimationFrame(scroll);
    }
}


