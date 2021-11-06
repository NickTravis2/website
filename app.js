// imports
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const comment = require('./models/Comment');
const app = express();
// app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

// Import Routes
// const authRoute = require('/');
// const commentRoute = require('./routes/comments');
// const authRoute = require('./routes/auth');

dotenv.config();

// const port = 5000;

// Connect to DB
// https://www.mongodb.com/cloud/atlas
// const CONNECTION_URL = 'mongodb+srv://nickdev:nickdev123@cluster0.tcpc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// // Route Middleware
// app.use('http://localhost:5000', authRoute);
// Middleware
app.use(express.json());
// app.use('/', authRoute);
// app.use('/api/user', commentRoute);
// app.use('/api/user', authRoute);

mongoose.connect(
    // 'mongodb+srv://nickdev:nickdev123@cluster0.tcpc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    process.env.CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to db')
);
// mongoose.connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => app.listen(PORT, () => {console.log(`Server running on port: ${PORT}`)}))
//     .catch((error) => console.log(`${error} did not connect`));





// static files
app.use(express.static('public'));
// app.use('/css'. express.static(__dirname + 'public/css'));
// app.use( '/js'. express.static(__dirname + 'public/js'));
// app.use( '/images'. express.static(__dirname + 'public/images'));



// set Templating Engine
app.use(expressLayouts);
app.set('layout' , './layouts/full-width')
// app.set('layout' , './layouts/pokedex')
// app.set('layout' , './layouts/full-width')
app.set('view engine', 'ejs');


// Routes
app.get('/add-comment', (req, res) => {
    const comment = new Comment({
        comment: 'new comment'
    });

    comment.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})
app.get('*', checkUser);
app.get('/',(req, res) => {
    comment.find().sort({ date: -1 })
    .then((result) => {
        res.render('index', { title: 'Web Portfolio - Home', comments: result, layout: './layouts/full-width'});
    })
    .catch((err) => {
        console.log(err);
    })
    // const comments = [
        // { user: 'PLAYER 1', time: '12:00PM idk', userComment: 'This message 1' },
        // { user: 'PLAYER 2', time: '12:00PM idk', userComment: 'This message 2' },
        // { user: 'PLAYER 3', time: '12:00PM idk', userComment: 'This message 3' }
    // ];
    // app.set('layout' , './layouts/full-width')
});
app.get('/signup',(req, res) => {
    res.render('signup', { title: 'Sign Up', layout: './layouts/registration'});
    app.set('layout' , './layouts/registration')
});
app.get('/login',(req, res) => {
    res.render('login', { title: 'Log in', layout: './layouts/registration'});
    app.set('layout' , './layouts/registration')
});


// To-Do Apps
app.get('/about',(req, res) => {
    res.render('about.ejs', { title: 'To-Do List', layout: './layouts/sidebar'});
    app.set('layout' , './layouts/sidebar')
});
// NASA CSV
app.get('/nasa-csv-data',(req, res) => {
    res.render('nasa-csv-data.ejs', { title: 'Global Weather Data', layout: './layouts/sidebar'});
    app.set('layout' , './layouts/sidebar')
});
// ISS API
app.get('/ISS-location',(req, res) => {
    res.render('ISS-location.ejs', { title: 'Find the ISS', layout: './layouts/sidebar'});
    app.set('layout' , './layouts/sidebar')
});
// SNAKE GAME
app.get('/snake-game',(req, res) => {
    res.render('snake-game.ejs', { title: 'Snake Game', layout: './layouts/snake'});
    app.set('layout' , './layouts/snake')
});
// POKEDEX API
app.get('/pokedex',(req, res) => {
    res.render('pokedex.ejs', { title: 'PokeDex API', layout: './layouts/pokedex'});
});

// REGISTER SUCCESS SCREEN
// app.get('/api/user/register', (req, res) => {
//     res.render('register.ejs', { title: 'Registration', layout: './layouts/registration'});
// });
app.use(authRoutes);

// cookies
app.get('/set-cookies', (req, res) => {

    // res.setHeader('set-cookie', 'newUser=true');

    res.cookie('newUser', false);
    res.cookie('isMember', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

    res.send('you got the cookies');
});

app.get('/read-cookies', (req, res) => {

    const cookies = req.cookies;
    console.log(cookies.newUser);

    res.json(cookies);

});

app.use((req, res) => {
    res.status(404).render('404.ejs', { title: '404', layout: './layouts/full-width'});
});



// Listen on Port 5000
app.listen(PORT, () => console.info(`Server running on port ${PORT}`));