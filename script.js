// Smooth Scroll Active Menu

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// Scroll Animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.7s";

observer.observe(card);

});

// Hero Fade

window.addEventListener("load",()=>{

document.querySelector(".hero").style.opacity="1";

});

document.querySelector(".hero").style.opacity="0";

document.querySelector(".hero").style.transition="1.2s";
