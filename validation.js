// Validation
// const Joi = require('joi');

// //Register validation
// const registerValidation = data => {
//     const schema = Joi.object({
//         name: Joi.string()
//             .min(6)
//             .required(),
//         email: Joi.string()
//             .min(6)
//             .required()
//             .email(),
//         password: Joi.string()
//             .min(6)
//             .required()
//     }).unknown();
//     return schema.validate(data);
// };

// const loginValidation = data => {
//     const schema = Joi.object({
//         email: Joi.string()
//             .min(6)
//             .required()
//             .email(),
//         password: Joi.string()
//             .min(6)
//             .required()
//     });
//     return schema.validate(data);
// };

// const commentValidation = data => {
//     const schema = Joi.object({
//         name: Joi.string()
//             .min(2)
//             .max(100),
//         comment: Joi.string()
//             .min(6)
//             .max(100),
//         date: Joi.date()
//     });
//     return schema.validate(data);
// };

// module.exports.registerValidation = registerValidation;
// module.exports.loginValidation = loginValidation;
// module.exports.commentValidation = commentValidation;


















// const schema = {
//     name: Joi.string().min(6).required(),
//     email: Joi.string().min(6).required().email(),
//     password: Joi.string().min(6).required()
// };
