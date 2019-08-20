
(() => {
    // const Http = new XMLHttpRequest();
    // const url = 'JSONs/executive-board.json';
    // Http.open("GET", url);
    // Http.send();

    // Http.onreadystatechange = (e) => {
    // console.log(Http.responseText);
    // }

    // fetch("JSONs/executive-board.json",{mode: 'cors'})
    //     .then(r => {
    //         console.log(r);
    //     })

    const members = board["board"];
    const membersContainer = document.querySelector("#board-container > .members");
    for(let i = 0; i < members.length; i++){
        const member = members[i];
        const memberString = `
            <div class="member">
            <img class="member-img" src="images/${member.img}">
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
    animateBtn();
    setInterval(() => {
        animateBtn();
    }, time);
    
    thanksSub.style.display = "block";
    subscribeEmail.style.display = "none";
    subscribeBtnSpan.style.display = "none";
}

const signUpBtn = document.querySelector("#signup-link");
const subscribeContainer = document.querySelector("#subscribe-container");
const subscribeBtnOffset = subscribeBtn.getBoundingClientRect()["bottom"] + 200;

signUpBtn.addEventListener('click', () => {
    scroll();
});

function scroll() {
    if ('requestAnimationFrame' in window === false) {
        body.scrollTo(0, body.scrollHeight);
        return;
    }

    body.scrollTo(0, body.scrollTop + 50);

    const bodyViewport = body.clientHeight - 20; // -20 cuz padding
    let bodyOffset = body.scrollTop + bodyViewport;

    console.log(subscribeBtnOffset);
    console.log(bodyOffset);


    if(subscribeBtnOffset <= bodyOffset){
        return;
    } else {
        requestAnimationFrame(scroll);
    }
}


