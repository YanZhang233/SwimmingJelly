var jelly = document.querySelector(".jelly");
var head = document.querySelector(".head");
var eyes = document.querySelector(".eyes");
var loading = document.getElementById("loading");
var dumb = document.getElementById("dumb");

jelly.addEventListener("animationstart", function (event) {
    setTimeout(pause, 2500);
    setTimeout(resume, 5000);
});

function pause() {
    head.style.webkitAnimationPlayState = "paused";
    eyes.style.webkitAnimationPlayState = "paused";

    toggleHide(loading);
}

function resume() {
    toggleHide(loading);
    toggleHide(dumb);

    head.style.webkitAnimationPlayState = "running";
    eyes.style.webkitAnimationPlayState = "running";
}

function toggleHide(Object) {
    if(Object.classList.contains("hide")) {
        Object.classList.remove("hide");
    } else {
        Object.classList.add("hide");
    }
}



