// // const express = require('express');
// const router = require('express').Router();
// const verify = require('./verifyToken');
// const jwt = require('jsonwebtoken');
// const Comment = require('../models/Comment');
// const { commentValidation } = require('../validation');
// const User = require('../models/User');

// // const poster = require(commentRoute);

// router.get('/comments', verify, (req, res) => {
//     res.json({
//          comments: {
//             title: 'my first comment',
//             description: 'random data u shouldnt access'
//         } 
//     });
// });

// // res.send(req.user);
    
// // User.findByOne({_id: req.user});

// router.post('/comments', verify, async (req, res) => {

//     const {error} = commentValidation(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     // const user = await User.findOne({email: req.body.email});

  

//     const username = req.body.name;

//      //Create and assign a token
//     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
//     //Check if the user is logged in
//     const user = await User.findOne({token: req.header.auth-token});
//     if(!user) return res.status(400).send('Log in, in order to leave a comment');
//     res.header('auth-token', token).send(token);
//     res.send(req.body.comment);

    

//     // Create a new comment
//     const comment = new Comment({
//         name: username,
//         comment: req.body.comment,
//         date: new Date()
//     });
//     try{
//         const savedComment = await comment.save();
//         res.send(savedComment.comment);
//         // res.send({name: User.name});
//     }catch(err){
//         res.status(400).send(err);
//     }
   
    
//         // try{
//         //     const savedUser = await user.save();
//         //     res.send({ user: user._id});
//         // }catch(err){
//         //     res.status(400).send(err);
//         // }
    
//     // res.json({
//     //      comments: {
//     //         title: 'my first comment',
//     //         description: 'random data u shouldnt access'
//     //     } 
//     // });
// });

// module.exports = router;



// // app.post('/api/comment', (req, res) => {
    
// // })