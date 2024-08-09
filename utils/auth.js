const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};
console.log("auth-js")
module.exports = withAuth;