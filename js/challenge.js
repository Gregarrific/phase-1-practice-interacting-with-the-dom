let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let like = document.getElementById('heart');
let pause = document.getElementById('pause');
let pausedState = false;
let interId = null;
let comment;
let formInput = document.getElementById('comment-form');
//event listeners
document.addEventListener('DOMContentLoaded', event => {
    startTimer();
});
pause.addEventListener('click', event => {
    if (!pausedState) {
        pausedState = true;
        pauseTimer();
    } else {
        pausedState = false;
        startTimer();
    }
});
minus.addEventListener('click', event => {
    counter.innerText = parseInt(counter.innerText) - 1;
});
plus.addEventListener('click', event => {
    counter.innerText = parseInt(counter.innerText) + 1;
});
formInput.addEventListener('submit', event => {
    comment = document.getElementById('comment-input').value;
    event.preventDefault();
    addComments(comment);
    formInput.reset();
});
like.addEventListener('click', event => {
    addLikes(parseInt(counter.innerText));
});
//functions
function runTimer() {
    counter.innerText = parseInt(counter.innerText) + 1;
}
function startTimer() {
    interId = setInterval(runTimer, 1000);
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    pause.innerText = 'pause';
}
function pauseTimer() {
    clearInterval(interId);
    interId = null;
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.innerText = 'resume';
}
function addComments(comment) {
    let commentList = document.getElementById('list');
    let newComment = document.createElement('p');
    newComment.innerText = comment;
    commentList.appendChild(newComment);
}
function addLikes(count) {
    let likePosition = document.getElementById(`counter-${count}`);
    let likeList = document.querySelector('.likes');
    let newLike;
    if (!likePosition) {
        newLike = document.createElement('li');
        newLike.id = `counter-${count}`;
        newLike.innerHTML = `${count} has been liked <span>1</span> times.`;
        // console.log(newLike);
        likeList.appendChild(newLike);
    } else {
        newLike = document.getElementById(`counter-${count}`);
        let currentLikes = parseInt(newLike.children[0].innerHTML);
        // currentLikes = currentLikes + 1;
        // console.log(currentLikes);
        newLike.children[0].innerHTML = currentLikes + 1;
    }
}