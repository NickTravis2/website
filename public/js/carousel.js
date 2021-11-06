const track = document.querySelector('.carousel_track');
const navTrack = document.querySelector('.nav_track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel_button--left');
const nextButton = document.querySelector('.carousel_button--right');
const ellipseNav = document.querySelector('.sliderEllipse'); 
const dots = Array.from(ellipseNav.children);
const oneSlide = document.querySelector('.carousel_slide');
// const title = document.getElementsByClassName('project_title');

pagePixelHeight = window.innerHeight;
console.log(pagePixelHeight);
// const targetIndex = dots.findIndex(dot => dot === targetDot);


const slideWidth = slides[0].getBoundingClientRect().width;
const dotWidth = dots[0].getBoundingClientRect().width + 12;

console.log(dotWidth);

const setDotPosition = (dot, index) => {
    dot.style.left = dotWidth * index + 'px';
}

dots.forEach(setDotPosition);

const moveToDots = (navTrack, currentDot, targetDot) => {
    navTrack.style.transform = 'translateX(-' + targetDot.style.left + ')';
    currentDot.classList.remove('current-slide');    
    targetDot.classList.add('current-slide'); 
}

// console.log(slides);

// arrange the slides next to eachother

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');    
    targetSlide.classList.add('current-slide'); 
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

const changeBtn = (ellipseNav, targetDot, targetIndex) => {
    // const targetDot = e.target.closest('button');

};


const dotPagination = (ellipseNav, currentDot, targetDot, vanishBtn) => {
    ellipseNav.style.transform = 'translateX(-' + targetDot.style.left + ')';
    currentDot.classList.remove('current-slide');
    targetDot.classList.remove('off-screen');
    targetDot.classList.add('current-slide');
    
    
};

// vanishBtn.classList.add('off-screen');

    // while (dots.length > 3) {
    //     vanishBtn.classList.add('off-screen');
    // }
    


// when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = ellipseNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)
    const doubleDot = prevDot.previousElementSibling;

    switch(prevIndex) {
        case 0:
            document.getElementById('project_title').innerHTML = "To-Do List";
            break;
        case 1:
            document.getElementById('project_title').innerHTML = "Global Weather Data";
            break;
        case 2:
            document.getElementById('project_title').innerHTML = "Space Station API";
            break;
        case 3:
            document.getElementById('project_title').innerHTML = "Snake Game";
            break;
        case 4:
            document.getElementById('project_title').innerText = "PokéDex API";
            break;
        case 5:
            document.getElementById('project_title').innerHTML = "6";
            break;
        case 6:
            document.getElementById('project_title').innerHTML = "7";
            break;
        case 7:
            document.getElementById('project_title').innerHTML = "8";
            break;
        default:
            document.getElementById('project_title').innerHTML = "default";
    }


    moveToSlide(track, currentSlide, prevSlide);
    moveToDots(navTrack, currentDot, prevDot);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
    dotPagination(ellipseNav, currentDot, prevDot, doubleDot);
});

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = ellipseNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    switch(nextIndex) {
        case 0:
            document.getElementById('project_title').innerHTML = "To-Do List";
            break;
        case 1:
            document.getElementById('project_title').innerHTML = "Global Weather Data";
            break;
        case 2:
            document.getElementById('project_title').innerHTML = "Space Station API";
            break;
        case 3:
            document.getElementById('project_title').innerHTML = "Snake Game";
            break;
        case 4:
            document.getElementById('project_title').innerText = "PokéDex API";
            break;
        case 5:
            document.getElementById('project_title').innerHTML = "6";
            break;
        case 6:
            document.getElementById('project_title').innerHTML = "7";
            break;
        case 7:
            document.getElementById('project_title').innerHTML = "8";
            break;
        default:
            document.getElementById('project_title').innerHTML = "default";
    }
    
    moveToSlide(track, currentSlide, nextSlide);
    moveToDots(navTrack, currentDot, nextDot);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
    dotPagination(ellipseNav, currentDot, nextDot);
});

// when I click nav indicators, move to that slide

ellipseNav.addEventListener('click', e => {
    // what indicator was clicked on
    const targetDot = e.target.closest('button');

    // console.log(targetDot);

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = ellipseNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    // console.log(targetIndex);

    switch(targetIndex) {
        case 0:
            document.getElementById('project_title').innerHTML = "To-Do List";
            break;
        case 1:
            document.getElementById('project_title').innerHTML = "Global Weather Data";
            break;
        case 2:
            document.getElementById('project_title').innerHTML = "Space Station API";
            break;
        case 3:
            document.getElementById('project_title').innerHTML = "Snake Game";
            break;
        case 4:
            document.getElementById('project_title').innerText = "PokéDex API";
            break;
        case 5:
            document.getElementById('project_title').innerHTML = "6";
            break;
        case 6:
            document.getElementById('project_title').innerHTML = "7";
            break;
        case 7:
            document.getElementById('project_title').innerHTML = "8";
            break;
        default:
            document.getElementById('project_title').innerHTML = "default";
    }



    moveToSlide(track, currentSlide, targetSlide);
    moveToDots(navTrack, currentDot, targetDot);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    dotPagination(ellipseNav, currentDot, targetDot);
    changeBtn();

    console.log(targetIndex);

    


    
});

// as I move from left to right, previous nav hide hide and new buttons appear
// console.log(dots);
// dots.shift();
// console.log(dots);

const buttonSlide = (currentDot, targetIndex) => {

    // if (targetDot === dots[1]) {
    //     // dots.shift();
    //     console.log(dots);
    // }else if (targetDot > dots[1]) {
    //     // dots.shift();
    //     console.log('worked');
    // } 

    // if (targetIndex > 0) {
    //     console.log('works');
    // }


}

// console.log(dots.length);

// function change_text(){
//     document.getElementById("demo").innerHTML = "You clicked the button, I am new paragraph.";
// }

oneSlide.addEventListener('click', function () {
    console.log('whoops');
    oneSlide.classList.toggle('is-flipped');
    
});

