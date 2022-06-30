let q = [""]
let fade = document.getElementById("fade");
let fades = document.getElementsByClassName("fade-out");

function fadeOut() {
    fade.classList.toggle("fade-out");
    setTimeout(next, 1000);
}

function next() {
    fade.firstElementChild.remove();
    if (document.querySelector("#fade > button").innerHTML == "開始 →")
        document.querySelector("#fade > button").innerHTML = "繼續 →";
    fade.classList.toggle("fade-in");
    fade.classList.toggle("fade-out");
}
