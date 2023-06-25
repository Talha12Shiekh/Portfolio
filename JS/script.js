// destructured console to console.log things 
const { log } = console;

//  <---------------------  code for the sidebar of the website --------------------->
let humburgar = document.getElementsByClassName("humburgar")[0];
let sidebar = document.getElementsByClassName("sidebar")[0];
let overlay = document.getElementById("mobile-overlay");
let cross = document.getElementsByClassName("cross")[0];

function close() {
    sidebar.style.left = "-270px";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";

}

humburgar.addEventListener("click", () => {
    sidebar.style.left = "0px";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
});

cross.addEventListener("click", () => {
    close()
});

overlay.addEventListener("click", () => {
    close()
});

//  <---------------------  code for the sidebar of the website end --------------------->

//  <---------------------  code for the dark mode of the website --------------------->

let darkMode = localStorage.getItem("DARK_MODE");
let input = document.querySelector("[type='checkbox']")

if (darkMode == "enabled") {
    document.documentElement.classList.add("dark_mode");
    input.checked = true
}

input.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("DARK_MODE")
    if (e.target.checked) {
        document.documentElement.classList.add("dark_mode")
        localStorage.setItem("DARK_MODE", "enabled")
    } else {
        localStorage.setItem("DARK_MODE", "disabled")
        document.documentElement.classList.remove("dark_mode")
    }
})


//  <---------------------  code for the dark mode of the website ended --------------------->

//  <---------------------  code for the filtering list of the portfolio --------------------->

let filterLists = document.querySelectorAll("[data-filter]");
let portfolioLists = document.querySelectorAll("[data-filter-list]");
let portfolioItems = document.querySelectorAll("[class='grid_item']");
let portfoliocontainer = document.querySelectorAll("[class='grid_container']");
portfolioItems.forEach(item => item.style.display = "block")
function removeActiveLists() {
    filterLists.forEach(list => list.classList.remove("active"))
}

filterLists.forEach(list => {
    list.addEventListener("click", () => {
        removeActiveLists()
        list.classList.add("active")
        portfolioLists.forEach(portlist => {
            if (list.getAttribute("data-filter") == "all") {
                portlist.parentElement.parentElement.style.display = "block";
                portlist.parentElement.parentElement.classList.add("animate_cards")
            }
            else if (portlist.innerHTML == list.getAttribute("data-filter")) {
                portlist.parentElement.parentElement.style.display = "block";
                portlist.parentElement.parentElement.classList.add("animate_cards")
            } else {
                portlist.parentElement.parentElement.style.display = "none"
            }
        })
    })
})

//  <---------------------  code for the filtering list of the portfolio ended --------------------->

//  <---------------------  code for the accordian --------------------->


const accordian = document.querySelectorAll(".contentbox");


function removeAccordians() {
    accordian.forEach(accord => accord.classList.remove("active"))
}

accordian.forEach(accord => {
    accord.addEventListener("click", () => {
        if (accord.classList.contains("active")) {
            accord.classList.remove("active");
            setTimeout(() => {
                accord.classList.add("active");
            }, 500)
        } else {
            removeAccordians()
            accord.classList.toggle("active")
        }
    })
})

//  <---------------------  code for the accordian ended --------------------->


//  <---------------------  code for the scroll top button --------------------->

let scroll_top_btn = document.querySelector("#scroll-top-btn");

document.addEventListener("scroll", (e) => {
    let scrollposition = e.target.scrollingElement.scrollTop;
    if (scrollposition > 0) {
        scroll_top_btn.classList.add("visible");
    } else {
        scroll_top_btn.classList.remove("visible");
    }
});

scroll_top_btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
}


 //  <---------------------  code for the scroll top button ended --------------------->


//  <---------------------  portfolio ended  --------------------->
// Personal Portfolio created by TALHA SHIEKH ( Sun , 12 March ) 12 / 3 / 2023 using HTML CSS AND JS
//                          SPECIAL CREDITS TO : 

// 1)   https://preview.colorlib.com/#personal ( from where i checked the desing )
// 2)   AOS library ( that i used for scrolling animation in About page )
// 3)   Swiper js ( which i used to make slider in home and about page )
// 4)   Formspree ( that i used for submitting user message in the footer )

//  <---------------------  portfolio completed  --------------------->

