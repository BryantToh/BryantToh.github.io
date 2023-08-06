var hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


var allpages = document.querySelectorAll(".page");
console.log(allpages);
hideall();
function hideall() {
    for (let onepage of allpages) {
        let allpages = document.querySelectorAll(".page");
        onepage.style.display = "none";
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    //show the page
    onepage.style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
    show(1);
});
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});


function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display === "none") {
        btnText.innerHTML = "Read More...";
    }
    else {
        btnText.style.display = "none";
        moreText.style.display = "inline";
    }
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenelements = document.querySelectorAll(".hidden");
hiddenelements.forEach((el) => observer.observe(el));

function showText(txtno){
    var textDiv = document.getElementById("fade"+txtno);
    if (textDiv.style.display == "none"){
        textDiv.style.display = "block";
    }
    else{
         textDiv.style.display = "none";
    }
}

function ScrollToTop(){
    window.scrollTo(0, 0);
}


