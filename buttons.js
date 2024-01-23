// Animated Outline Button 1
// Note: Sometimes outline incorrectly draws on some edges when quickly mousing in and out

const aoButton = document.querySelector(".animated-outline-button-1");
const aoTop = document.querySelector(".outline-top");
const aoRight = document.querySelector(".outline-right");
const aoBottom = document.querySelector(".outline-bottom");
const aoLeft = document.querySelector(".outline-left");

const sleep = function(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const getScaleX = function(element) {
    return Number(window.getComputedStyle(element).transform.slice(7, -1).split(", ")[0]);
}

const getScaleY = function(element) {
    return Number(window.getComputedStyle(element).transform.slice(7, -1).split(", ")[3]);
}

const interval = 10;

aoButton.addEventListener("mouseenter", async function() {
    aoTop.classList.add("full");
    while (getScaleX(aoTop) < 1) await sleep(interval);
    aoRight.classList.add("full");
    while (getScaleY(aoRight) < 1) await sleep(interval);
    aoBottom.classList.add("full");
    while (getScaleX(aoBottom) < 1) await sleep(interval);
    aoLeft.classList.add("full");
});

aoButton.addEventListener("mouseleave", async function() {
    aoLeft.classList.remove("full");
    while (getScaleY(aoLeft) > 0) await sleep(interval);
    aoBottom.classList.remove("full");
    while (getScaleX(aoBottom) > 0) await sleep(interval);
    aoRight.classList.remove("full");
    while (getScaleY(aoRight) > 0) await sleep(interval);
    aoTop.classList.remove("full");
});
