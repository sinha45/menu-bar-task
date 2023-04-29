const navbarToggler = document.querySelector('navbar-toggler');
const navbarCollapse = document.querySelector('navbar-collapse');

// toggle the navigation menu on click of the hamburger icon
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show-menu');
});

// hide the navigation menu when a link is clicked
navbarCollapse.querySelectorAll('nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show-menu');
    });
});
