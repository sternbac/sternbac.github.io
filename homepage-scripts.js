
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
const subscribeBtnOffset = subscribeBtn.getBoundingClientRect()["bottom"] + 100;

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

    if(subscribeBtnOffset <= bodyOffset){
        return;
    } else {
        requestAnimationFrame(scroll);
    }
}

