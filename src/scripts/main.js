document.querySelector("#activate-flight").addEventListener("click", function (event) {
    fligthHandlerFunction();
})

function fligthHandlerFunction () {
    document.getElementById("flight").classList.remove("disabled")
    document.getElementById("flight").classList.add("enabled")
}

document.querySelector("#activate-mindreading").addEventListener("click", function (event) {
    mindreadingHandlerFunction();
})

function mindreadingHandlerFunction () {
    document.getElementById("mindreading").classList.remove("disabled")
    document.getElementById("mindreading").classList.add("enabled")
}

document.querySelector("#activate-xray").addEventListener("click", function (event) {
    xrayHandlerFunction();
})

function xrayHandlerFunction () {
    document.getElementById("xray").classList.remove("disabled")
    document.getElementById("xray").classList.add("enabled")
}

document.getElementById("activate-all").addEventListener("click", function (event) {
    const powers = document.querySelectorAll("section");
    for (i = 0; i < powers.length; i++) {
        powers[i].classList.replace("disabled", "enabled");
        console.log(powers)
    }
})

document.getElementById("deactivate-all").addEventListener("click", function (event) {
    const powers = document.querySelectorAll("section");
    for (i = 0; i < powers.length; i++) {
        powers[i].classList.replace("enabled", "disabled");
        console.log(powers)
    }
})
