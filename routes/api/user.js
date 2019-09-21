const router = require("express").Router();
const userController = require("../../controllers/userController");
const { check } = require("express-validator");
// Authentication package
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Matches with "/api/user/signup"
router
    .route("/signup")
    .post([
        // email must be an email
        check("email", "Email field cannot be empty").not().isEmpty(),
        check("email", "Invalid email please verify the email address you have provided").isEmail(),
        check("email", "Email address must be between 4-100 characters long, please try again").isLength({ min: 5, max: 100 }),
        // password must be at least 5 chars long
        check("password", "Password must be between 8-100 characters long").isLength({ min: 8, max: 100 }),
        check("password", "Password must include one lowercase character, one uppercase character,and a number.").matches(("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")),
        check("password").custom(function (value, { req }) {
            if (value !== req.body.confirmPassword) {
                throw new Error("Password confirmation is incorrect, please try again");
            } else return true;
        })
    ],userController.create);

// Matches with "/api/user/login"
router
    .route("/login")
    .post(
        passport.authenticate("local", { failureRedirect: "/" }),
            function(req, res) {
                // db.User.update({ status: "active" }, { req.user });
                console.log("try to redirect");
                res.json(req.user);
            }
    );

// route for handling logging out
router
    .route("/logout")
    .post(userController.logout);

router
    .route("/:id")
    .put(userController.update)

router.route("/:id")
    .get(userController.findById);

passport.use(
    "local",
    new LocalStrategy(userController.logUserIn)
);

module.exports = router;