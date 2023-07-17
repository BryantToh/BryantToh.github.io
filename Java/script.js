//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages)
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
document.addEventListener("DOMContentLoaded", function()
{
    show (1);
});
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});

/*for hamMenu */
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");
function toggleMenus() { /*open and close menu*/
    menuItemsList.classList.toggle("menuShow");
    /*if(menuItemsList.style.display=="block")
    menuItemsList.style.display="none";
    else menuItemsList.style.display="block";*/
}
//can optimize using toggle class with css transitions
/*page1btn.addEventListener("click", ShowPage1);

function ShowPage1(){
    let thispage=document.querySelector("#page1");
    thispage.style.display="block";
}

function show(pgno){
    hideall();
    let onepage = document.querySelector("#page" + pgno);
    onepage.stye.display = "block";
}

page3btn.addEventListener("click", showpg3);
page3btn.addEventListener("click", function(){
    show(3);
});

function showpg3(){
    show(3);
}*/
