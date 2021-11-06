// User-Agent: PersonalWebPortfolio (https://nicktravisdev.me, v1.0.0)
    
    
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

    // menuBtn.addEventListener('click', () => {
    //     menuBtn.classList.toggle('open');
    //     mobileNav.classList.toggle('open');
    //     links.forEach(link => {
    //         link.classList.toggle('fade');
    //     });
    // });

    // links.addEventListener('click', () => {
    //     mobileNav.classList.remove('open');
    // });


    // CHANGING NAV COLOR W/ INTERSECTION OBSERVER ////////////////////////////////
    const navOptions = {
        rootMargin: "-100px 0px 0px 0px"
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

    navObserver.observe(nav);

    // ********************* POKEDEX CODE ************************* //

    const poke_container = document.getElementById('poke_container');
    const pokemon_number = 151;

    const fetchPokemon = () => {
        const promises = [];
        for (let i = 1; i<= pokemon_number; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        Promise.all(promises).then((results) => {
            const pokemon = results.map((data) => ({
                name: data.name,
                id: data.id,
                image: data.sprites["front_default"],
                type: data.types.map((type) => type.type.name).join(" | "), 
            }));
            displayPokemon(pokemon);
        });
    };

    const displayPokemon = (pokemon) => {
        console.log(pokemon);
        const pokemonHTMLString = pokemon.map((p) => 
            `
                <li class="card">
                    <img class="card-image" src="${p.image}" />
                    <div class="card-content">
                        <h2 class="card-title"><span class="id">#${p.id}.</span> ${p.name}</h2>
                        <h4 class="card-subtitle">Type: ${p.type}</h4>
                    </div>
                </li>
            `).join("");

        poke_container.innerHTML = pokemonHTMLString;
        // const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        

    };
    // console.log(name);
    fetchPokemon();

   
    // card.addEventListener('click', function() {
    //     modal.classList.add('bg-active');
    // });

    const modalBg = document.getElementsByClassName('pokemon-modal');
    const card = document.getElementsByClassName('card');


    poke_container.forEach(card => {
        // INDIVIDUAL POKEMON MODAL //


        card.addEventListener('click', function() {
            poke_container.forEach(card => card.classList.add('bg-active'));
            // this.classList.add('active');
        });
    });




    // const parent = this.el.parentElement;
    //     [...parent.children].forEach(child => {
    //     console.log(child);
    // });



        // //code for active nav options
        // const nav_list = document.querySelectorAll('li');

        // nav_list.forEach(a => {
        //     a.addEventListener('click', function() {
        //         nav_list.forEach(a => a.classList.remove('active'));
        //         this.classList.add('active');
        //     });
        // });



    
        // card.addEventListener('click', (modal) => {
        //     console.log('did a click');
        //     if (!modal.classList.contains('open')) {
        //         modal.classList.add('open');
        //     } else {
        //         console.log('this the end playa');
        //         return;
        //     }
        // });
    
    

    // seePokemon(card);
    
    
    
    // const seePokemon() = card.addEventListener('click', () => {
    //         console.log('did a click');
    //         if (modal.classList.contains('open')) {
    //             modal.classList.add('open');
    //         } else {
    //             console.log('this the end playa');
    //             return;
    //         }
    //     });
    // {
    // }
    //     seePokemon(card);


    




















    // const fetchPokemon = async () => {
    //     for(let i=1; i <=pokemon_number; i++) {
    //         await getPokemon(i);
    //     }
    // }
    // // console.log("11111111");

    // const getPokemon = async id => {
    //     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    //     const res = await fetch(url);
    //     const pokemon = await res.json();
    //     console.log(pokemon);
    //     createPokemonCard(pokemon);
    //     console.log(url + ".sprite.png");
    // }
    // // getPokemon(1);

    // fetchPokemon();

    // function createPokemonCard(pokemon) {

    //     const pokemonEl = document.createElement('div');
    //     pokemonEl.classList.add('pokemon');

    //     const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    //     const pokeInnerHTML = `
    //         <div class="img-container">
    //             // <img src = "https://pokeapi.co/api/v2/pokemon/${pokemon.id}/">
    //         </div>
    //         ${name}
    //     `;

    //     pokemonEl.innerHTML = pokeInnerHTML; 

    //     poke_container.appendChild(pokemonEl);
    //     // console.console.log("3");
    // }
    // // console.console.log("4");