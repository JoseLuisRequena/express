const passport = require("passport");
const jwt = require("jsonwebtoken");
const controller = {};

//controller.index = function(req, res, next) {
//    res.render('index', { title: 'Jose Luis' });
//}
controller.login = function(req, res, next) {(
    async (req, res, next) => {
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
                            
                            const body = { _id: user._id, email: user.email };
                            const token = jwt.sign({ user: body }, 'TOP_SECRET');
                            
                            return res.json({ token });
                        }
                    );
                } catch (error) {
                  return next(error);
                }
            }
        )(req, res, next);
    }
)};
  
module.exports = controller