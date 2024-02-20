const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
// For Progress Bar
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [75, 60, 75, 60];


// Add the sticky class to the navbar when you reach its scroll position. 
//Remove "sticky" when you leave the scroll position
window.addEventListener('scroll', () => {
    mainFn();
});

const mainFn = () => {
    if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if (window.scrollY >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            });
            navbarLinks[i].classList.add('change');
        }
    });

    // This will fill the progress bar when it is in the viewport
    if (window.scrollY + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
        });
    }
};
mainFn();

window.addEventListener('resize', () => {
    window.location.reload();
});