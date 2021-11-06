const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");

// sky
// const sky = document.querySelector(".sky");

const translate = document.querySelectorAll(".translate");
const main_title = document.querySelector(".main-title");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const content_right = document.querySelector(".content-right");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const [red, green, blue, alpha] = [0,0,0,0.5];
const userModal = document.getElementById('registerModal')
const registerBtn = document.getElementById('registerBtn');

// close modal after registration is complete
registerBtn.addEventListener('click', () => {
    userModal.classList.remove('open');
})

//code for active nav options
const nav_list = document.querySelectorAll('li');

nav_list.forEach(a => {
    a.addEventListener('click', function() {
        nav_list.forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});


let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

// FOOTER NAV MENU - ADD ACTIVE CLASS
const nav__link = document.querySelectorAll('li');

nav__link.forEach(a => {
    a.addEventListener('click', function() {
        nav_list.forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// CHANGING NAV COLOR W/ INTERSECTION OBSERVER ////////////////////////////////
const navOptions = {
    rootMargin: "-100px 0px 0px 0px"
};
const btn = document.getElementsByClassName('btn');


const navObserver = new IntersectionObserver
    (function(entries,
            navObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
            navList.classList.add("nav-scrolled");
            btn.classList.add("nav-scrolled");
            console.log('1');
        } else {
            nav.classList.remove("nav-scrolled");
            navList.classList.remove("nav-scrolled");
            btn.classList.remove("nav-scrolled");
            console.log('2');
        }
    });
},
navOptions);

navObserver.observe(header);

////////////////////////////////////////////////////////////////////////////////

//
// header_height = 850px
// sectiom_height = 937px

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    // attempt #1
    // sky.window.pageYOffset = 0;


    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // added *2 to opacity scroll
    //paragraph <p> text
    opacity.forEach(element => {
        element.style.opacity = (scroll / (sectionY.top + (section_height) / 1.2)) * 2;
    })

    main_title.style.opacity = - scroll / (header_height / 3) + 1;
    shadow.style.height = `${scroll * 0.75 + 300}px`;

    // content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;

    // content_right.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + (section_height) / 2) * 20}%`;

    // const y = 1 + window.pageYOffset / 15;
    // const [r,g,b,a] = [red/y, green/y, blue/y, alpha/y].map(Math.round);
    // nav.style.background = `rgba(${r},${g},${b},${a})`;

    // nav.style.background
})


// WEATHER APP PLAYBACK SPEED
var vid = document.getElementById('orbitVideo');
vid.playbackRate = 0.8;



// MOBILE MENU
const menuBtn = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const links = document.querySelectorAll('.mobile-nav li');
const logo = document.querySelector('#homeContainer a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
    logo.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });

    
});

links.addEventListener('click', () => {
    mobileNav.classList.remove('open');
});


// RESUME DOWNLOAD PDF
const resumeLink = document.querySelector('.resume a');
const embedPDF = document.querySelector('.resume embed');

embedPDF.addEventListener('click', () => {
    embedPDF.classList.add('pdf-page');
});


// comment button - clear textarea 


// const addComment = document.querySelector('.addCommentBtn');
// const commentBox = document.querySelector('#comment-form');
// addComment.addEventListener('click' , () => {
//     commentBox.innerHTML = ''; 
// })


// const addComment = document.getElementsByClassName('addCommentBtn');
// const commentBox = document.getElementById('comment-form');

// addComment.addEventListener('click', function () {
//     commentBox.value = '';
// });

// addComment = function clearContent()
// {
//     document.getElementById("comment-form").value='';
// }

