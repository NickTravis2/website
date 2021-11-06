// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const { registerValidation, loginValidation } = require('../validation');
// const bcrypt = require('bcryptjs');
// // const router = required('express').Router();
// // VALIDATION
// const User = require('../models/User');
// const Comment = require('../models/Comment');


// // Account registration
// router.post('/register', async (req, res) => {

//     // Validate the data before creating a new User
//     // const {error} = schema.validate();

//     const {error} = registerValidation(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     //Check if the user is already in the database
//     const emailExists = await User.findOne({email: req.body.email});
//     if(emailExists) return res.status(400).send('email already exists');

//     //Hash passwords
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     // Create a new user
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: hashedPassword
//     });
//     try{
//         const savedUser = await user.save();
//         res.redirect(301, "http://localhost:5000/");

//         // res.send({ user: user._id});

//     }catch(err){
//         res.status(400).send(err);
//     }
// });
// // Naivgation - Home Page
// // app.get('../../');
// // res.header("location", "http://localhost:5000");
// // res.redirect(307, 'http://localhost:5000/:id');
// // next();

// // Account login
// router.post('/login', async (req, res) => {

//     const {error} = loginValidation(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     //Check if the email is already in the database
//     const user = await User.findOne({email: req.body.email});
//     if(!user) return res.status(400).send('email is not found');
//     //check if password is correct
//     const validPass = await bcrypt.compare(req.body.password, user.password);
//     if(!validPass) return res.status(400).send('invalid password');

//     //Create and assign a token
//     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

//         // const user = new User({
//         //     email: req.body.email,
//         //     password: req.body.password 
//         // });
//         try{
//             // const isLogged = "login success";
//             // res.send(isLogged);
//             res.setHeader('auth-token', token);
//             res.redirect(301, "http://localhost:5000/signedin");
            
//         }catch(err){
//             res.status(400).send(err);
//         }
// });

// router.get('/signedin', async (req, res) => {

//     const {error} = commentValidation(req.body); // needs name   // header still needs auth-token
//     if (error) return res.status(400).send(error.details[0].message);

//     //Check if the email is already in the database
//     // const user = await User.findOne({email: req.body.email});
//     // if(!user) return res.status(400).send('email is not found');

//     //Create and assign a token
//     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

//     const user = await User.findOne({token: req.header.auth-token});
//     if(!user) return res.status(400).send('Log in, in order to leave a comment');

//         try{
//             res.setHeader('auth-token', token);
            
//         }catch(err){
//             res.status(400).send(err);
//         }
// });

// router.post('/comment', async (req, res) => {

//     const {error} = loginValidation(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     //Check if the email is already in the database
//     const user = await User.findOne({email: req.body.email});
//     if(!user) return res.status(400).send('email is not found');

//     //Create and assign a token
//     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
//     // Create a new user
//     const comment = new Comment({
//         name: req.body.name,
//         comment: req.body.comment
//     });

//         try{
//             res.setHeader('auth-token', token);
//             const savedComment = await comment.save();
//             res.send(savedComment.comment);
            
//         }catch(err){
//             res.status(400).send(err);
//         }
//         // next();
// });



// module.exports = router;



//     // //Check if the user is logged in
//     // const user = await User.findOne({token: req.header.auth-token});
//     // if(!user) return res.status(400).send('Log in, in order to leave a comment');
//     // res.header('auth-token', token).send(token);
//     // res.send(req.body.comment);

    

//     // // Create a new comment
//     // const comment = new Comment({
//     //     name: username,
//     //     comment: req.body.comment,
//     //     date: new Date()
//     // });
//     // try{
//     //     const savedComment = await comment.save();
//     //     res.send(savedComment.comment);
//     //     // res.send({name: User.name});
//     // }catch(err){
//     //     res.status(400).send(err);
//     // }