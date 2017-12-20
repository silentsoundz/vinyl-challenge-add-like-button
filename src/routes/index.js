import express from 'express'

import albums from './albums'
import users from './users'
import authentication from './authentication'
import {addLike} from '../actions'
const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/', authentication)
routes.use('/users', users)
routes.use('/albums', albums)

routes.post('/api/likes/:albumId', (req, res, next) => {
  const { albumId } = req.params
  // TODO: finish this call to addLike, and the .then handlers
  addLike()
})

// TODO: write the route that handles getLikes


export default routes
