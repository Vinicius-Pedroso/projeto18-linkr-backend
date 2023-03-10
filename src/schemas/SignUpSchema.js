import joi from "joi";

const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().min(3).required(),
    picture: joi.string().uri().required(),
})

export default signUpSchema;