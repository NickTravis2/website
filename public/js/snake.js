// Snake Game
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    // Page Layout *****************************************************************************************************
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
    
        // let header_height = header.offsetHeight;
        // let section_height = section.offsetHeight;
    
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
    
        // links.addEventListener('click', () => {
        //     mobileNav.classList.remove('open');
        // });
    
    
        // CHANGING NAV COLOR W/ INTERSECTION OBSERVER ////////////////////////////////
        const navOptions = {
            rootMargin: "667px 0px 0px 0px"
        };
    
        const navObserver = new IntersectionObserver
            (function(entries,
                    navObserver
        ) {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    nav.classList.add("nav-scrolled");
                    navList.classList.add("nav-scrolled");
                    header.classList.add("nav-scrolled");
                    console.log('1');
                } else {
                    nav.classList.remove("nav-scrolled");
                    navList.classList.remove("nav-scrolled");
                    header.classList.remove("nav-scrolled");
                    console.log('2');
                }
            });
        },
        navOptions);
    
        navObserver.observe(header);
    
    // ******************************************************************************************************************


    const width = 12;
    // first div in our grid
    let currentIndex = 0;
    let appleIndex = 0;
    let currentSnake = [2,1,0]; // 2 for the head, and 0 for the tail. 1s will make up the body.

    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;

    // To start/restart game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'));
        squares[appleIndex].classList.remove('apple');
        clearInterval(interval);
        score = 0;
        randomApple();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        // currentSnake = [2,1,0];
        currentSnake = [0,1,2];
        currentIndex = 0;
        currentSnake.forEach(index => squares[index].classList.add('snake'));
        interval = setInterval(moveOutcomes, intervalTime);

    }

    // Function that handles all snake outcomes
    function moveOutcomes() {
        // deals with snake hitting self or borders
        // *****************************************************ADD HEIGHT  
        if (
            (currentSnake[0] + width >= (width * width) && direction === width ) || // if snake hits bottom
            (currentSnake[0] % width === width -1 && direction === 1) || // right
            (currentSnake[0] % width === 0 && direction === -1) || // left
            (currentSnake[0] - width < 0 && direction === -width) || // top
            squares[currentSnake[0] + direction].classList.contains('snake')  // if snake hits self
        ) {
            return clearInterval(interval);  // this will clear the interval if any of the above happens
        }

        const tail = currentSnake.pop();
        squares[tail].classList.remove('snake'); // removes class of snake from tail
        currentSnake.unshift(currentSnake[0] + direction); // gives direction to the head of array

        // deals with getting apple
        if (squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple');
            squares[tail].classList.add('snake');
            currentSnake.push(tail);
            randomApple();
            score++;
            scoreDisplay.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(moveOutcomes, intervalTime);
        }
        squares[currentSnake[0]].classList.add('snake');
    }

    // generates new apple once one is eaten
    function randomApple() {
        do{
            appleIndex = Math.floor(Math.random() * squares.length)
        } while (squares[appleIndex].classList.contains('snake'));
        squares[appleIndex].classList.add('apple');
    }


    // Assign functions to keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snake');

        if(e.keyCode === 39) {
            direction = 1; // move right
            // console.log('right');
        } else if (e.keyCode === 38) {
            direction = -width;  // move up
            // console.log('up');
        } else if (e.keyCode === 37) {
            direction = -1;  // move left
            // console.log('left');
        } else if (e.keyCode === 40) {
            direction = +width;  // move down
            // console.log('down');
        }
    }

    document.addEventListener('keyup', control);
    startBtn.addEventListener('click', startGame);


    // ************************************************************* Page design ******************************************************* //    

    

});