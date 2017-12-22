const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    res.locals.isLoggedIn = true
    next()
  } else {
    const redirectUrl = req.originalUrl
    return res.redirect(`/sign-in/?redirectUrl=${redirectUrl}`)
  }
}

module.exports = {isLoggedIn}
