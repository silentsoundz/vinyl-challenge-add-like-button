import express from 'express'

import {
  checkEmailIsUsed,
  signIn,
  signUp,
} from '../actions'

import defaultResponseLocals from './defaultResponseLocals'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up', {error:null})
})

router.post('/sign-up', (req, res) => {
  const {name, password} = req.body
  const email = req.body.email.toLowerCase()
  if (name === '' || email === '' || password === '') {
    res.render('authentication/sign-up', {error: ' Please fill in all the fields'})
  } else {
    checkEmailIsUsed(email)
      .then((used) => {
        if (used) {
          res.render('authentication/sign-up', {error: 'That email is in use.'})
        } else {
          signUp(name, email, password)
            .then((newUser) => {
              req.session.user = newUser
              console.log("user created: ",req.session.user)
              return res.redirect('/')
            })
        }
      })
  }
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {error: null})
})

router.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  signIn(email)
    .then((validUser) => {
      if (!validUser) {
        return res.render('authentication/sign-in', {error: 'Incorrect username or password'})
      } else if (validUser.password !== password || validUser.email !== email) {
        return res.render('authentication/sign-in', {error: 'Incorrect username or password'})
      }
      req.session.user = validUser
      console.log('user signed in: ', req.session.user)
      return res.redirect('/')
    })
})

router.delete('/logout', (req, res, next) => {
  req.session.destroy()
  defaultResponseLocals()
  res.json()
})

export default router
