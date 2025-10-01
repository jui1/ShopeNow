// GRABBING DOM COMPOENTS
const navLink = document.querySelectorAll("ul li a");
const year = document.querySelector("#year");
// console.log(navLink);

// ACTIVE LINK
function linkAction() {
    navLink.forEach(n => n.classList.remove("bg-yellow-400"))
    this.classList.add("bg-yellow-400")
    // REMOVE MENU MOBILE;
}

navLink.forEach(n => n.addEventListener("click", linkAction));



// ==============SCROLL SECTION ACTIVE LINKS===============

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector("ul li a[href*=" + sectionId + "]").classList.add("bg-yellow-400")
        } else {
            document.querySelector("ul li a[href*=" + sectionId + "]").classList.remove("bg-yellow-400")
        }
    })
}


// LOADERS

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});


// SCROLL TOP 
const mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// CURRENT YEAR

const currentYear = new Date().getFullYear();
year.innerText = currentYear;