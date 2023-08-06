// Event listener for hamburger menu button to toggle navigation menu
var hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // Add or remove "active" class for hamburger icon
    navMenu.classList.toggle("active"); // Show or hide the navigation menu
});

// Event listeners for each navigation link to hide the navigation menu when clicked
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

// Hide all pages initially
var allpages = document.querySelectorAll(".page");
hideall();
function hideall() {
    for (let onepage of allpages) {
        onepage.style.display = "none";
    }
}

// Function to show a specific page based on the page number provided
function show(pgno) {
    hideall(); // Hide all pages first
    let onepage = document.querySelector("#page" + pgno); // Select the page based on the provided page number
    onepage.style.display = "block"; // Show the selected page
}

// Show the first page when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    show(1);
});

// Event listeners for buttons to show different pages when clicked
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

// Function to toggle "Read More..." button text and show/hide additional content
function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display === "none") {
        btnText.innerHTML = "Read More..."; // Change button text when the additional content is hidden
    } else {
        btnText.style.display = "none"; // Hide the button
        moreText.style.display = "inline"; // Show the additional content
    }
}

// Intersection observer to show elements when they are in the viewport
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add("show"); // Add "show" class to the element when it becomes visible
        }
        else{
            entry.target.classList.remove("show"); // Remove "show" class when the element is no longer visible
        }
    });
});

const hiddenelements = document.querySelectorAll(".hidden");
hiddenelements.forEach((el) => observer.observe(el));

// Function to show or hide text based on the provided number
function showText(txtno){
    var textDiv = document.getElementById("fade" + txtno);
    if (textDiv.style.display == "none"){
        textDiv.style.display = "block"; // Show the text
    }
    else{
         textDiv.style.display = "none"; // Hide the text
    }
}

// Function to scroll back to the top of the page
function ScrollToTop(){
    window.scrollTo(0, 0);
}