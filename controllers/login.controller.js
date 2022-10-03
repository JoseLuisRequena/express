const passport = require("passport");
const jwt = require("jsonwebtoken");
const secretKey = require("../env");
const controller = {};

//controller.index = function(req, res, next) {
//    res.render('index', { title: 'Jose Luis' });
//}
controller.login = async (req, res, next) => {
        passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('An error occurred.');
                        return next(error);
                    }
                  
                    req.login( user, { session: false }, 
                        async (error) => {
                            if (error) return next(error);
                            
                            const body = {username: user.username };
                            const expiresIn = 1000 * 60 * 60 * 24 * 30;
                            const token = jwt.sign({ user: body }, secretKey, { expiresIn: expiresIn });
                            
                            return res.json({ token });
                        }
                    );
                } catch (error) {
                  return next(error);
                }
            }
        )(req, res, next);
};
  
module.exports = controller;