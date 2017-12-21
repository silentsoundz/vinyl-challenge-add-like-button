const defaultResponseLocals = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/sign-in')
  } else {
    res.locals.isLoggedIn = false
    next()
  }
}

module.exports = {defaultResponseLocals}
