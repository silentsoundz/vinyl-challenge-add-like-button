const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    res.locals.isLoggedIn = true
  }
  next()
}

module.exports = {isLoggedIn}
