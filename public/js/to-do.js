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

navObserver.observe(header)

////////////////////////////////////////////////////////////////////////////////

// console.log('hello');

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', getTodos);


//Functions
function addTodo(event) {
    
    // prevent form from submitting
    event.preventDefault();
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);
    // CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // APPEND TO LIST
    todoList.appendChild(todoDiv);
    // CLEAR TODO INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(e){
    // console.log(e.target);
    const item = e.target;
    // DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',
            () => {
                todo.remove();
            });
        // todo.remove();
    }
    // CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    // const item = e.target;
    // const todo = item.parentElement; 
    todos.forEach( function(todo) {
        switch(e.target.value)
        {
            case "All":
                todo.style.display = "flex";
                console.log('all');
                break;
            case "Completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                console.log('complete');
            break;
            case "Incomplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                console.log('incomplete');
                break;
        }
        console.log(todo);

    });
}



function getTodos() {
    // Check for existing todos
    // let todos;
    // let todos = todoList.childNodes;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        // Todo Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');
        // Create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // CHECK MARK BUTTON
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        // TRASH BUTTON
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        // APPEND TO LIST
        todoList.appendChild(todoDiv);
        console.log('working');
    });  
    console.log('finally working');
}

function saveLocalTodos(todo) {
    // Check for existing todos
    let todos;
    // const todos = todoList.childNodes;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function removeLocalTodos(todo) {
    // Check for existing todos
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    // console.log(todo);
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// localStorage.clear();