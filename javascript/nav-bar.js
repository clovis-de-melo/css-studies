// console.log("test")

function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "/src/svg/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "/src/svg/close_white_36dp.svg";
    }
}

/* function hide() {
    alert("hide content function is working");
}


function show() {
    alert("show content function is working");
} */

function hide(el) {
    document.getElementById(el).style.display = "none";
}

function show(el) {
    document.getElementById(el).style.display = "block";
}

function container() {
    document.getElementById().style.position ="relative";
}