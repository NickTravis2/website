const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");

//code for active nav options
const nav_list = document.querySelectorAll('li');

nav_list.forEach(a => {
    a.addEventListener('click', function() {
        nav_list.forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// FOOTER NAV MENU - ADD ACTIVE CLASS
const nav__link = document.querySelectorAll('li');

nav__link.forEach(a => {
    a.addEventListener('click', function() {
        nav_list.forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// MOBILE MENU
const menuBtn = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const links = document.querySelectorAll('.mobile-nav li');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

links.addEventListener('click', () => {
    mobileNav.classList.remove('open');
});