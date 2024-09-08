const { Router } = require("express");
const {User} = require("../database/mongo");
const {userExistsSignUp} = require("../middleware/user");

const userRouter = Router();

userRouter.post("/signup", userExistsSignUp , async (req, res) => {
    const {email, password, firstName, lastName} = req.body;

    try {
        await User.create({
            email, password, firstName, lastName
        })
        res.status(200).json({
            message: "User created successfully"
        })
    } catch (err) {
        res.status(500).json({
            msg: "Error creating user",
            error: err.message
        })
    }
})

module.exports = {
    userRouter
}
