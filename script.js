// For Navigation Bar
let navlink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navlink.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show")
        navCollapse.classList.toggle("navbar-toggler collapsed")

    })
})


// For active on scroll
const li=document.querySelectorAll(".nav-link")
const sec=document.querySelectorAll("section")

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY+ 97 < sec[len].offsetTop){}
        li.forEach(line => line.classList.remove("active"));
        li[len].classList.add("active");
    
}

activeMenu();
window.addEventListener("scroll", activeMenu)





//For getting  day hours minutes

let day=document.querySelector("#days")
let hour=document.querySelector("#hours")
let minute=document.querySelector("#min")
let second =document.querySelector("#sec")

let countdown=()=>{
    let futureDate=new Date("30 December 2023")
    let currentDate=new Date()

    let myDate=futureDate-currentDate;

    let days=Math.floor(myDate/1000/60/60/24);
    let hours=Math.floor(myDate/1000/60/60)%24;
    let minutes=Math.floor(myDate/1000/60)%60;
    let seconds=Math.floor(myDate/1000)%60;


    day.innerHTML=days;
    hour.innerHTML=hours;
    minute.innerHTML=minutes;
    second.innerHTML=seconds;
}

countdown();

setInterval(countdown, 1000);

















// Scroll back to top
function scroll(){
    let scrollTopButton=document.querySelector("#scrollup")

    window.onscroll=function()
    {
        var scroll=document.documentElement.scrollTop;
        if(scroll>=250)
        {
            scrollTopButton.classList.add(".scrollActive")
        }
        else
        {
            scrollTopButton.classList.remove(".scrollActive")

        }
    }
}

scroll();