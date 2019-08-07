
const subscribeBtn = document.getElementById('subscribe-btn');
const subscribeBtnSpan = document.querySelector('#subscribe-btn > span');
const subscribeEmail = document.getElementById('subscribe-input');
const thanksSub = document.getElementById('thanks-sub');

subscribeBtn.addEventListener('click', (event) => {
    handleEmailSubmit(event);
});

function handleEmailSubmit(event){
    event.preventDefault();
    const time = 1000 * 10;
    subscribeBtn.animate([
            { backgroundPosition: "0% 0%" },
            { backgroundPosition: "100% 100%" }
        ], {
            fill: 'both',
            duration: time
        });
    thanksSub.style.display = "block";
    subscribeEmail.style.display = "none";
    subscribeBtnSpan.style.display = "none";
}
