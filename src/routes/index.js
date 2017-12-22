import express from 'express'

import albums from './albums'
import users from './users'
import authentication from './authentication'
import {addLike, checkUserLikeByAlbumId, getLikesByAlbumId} from '../actions'
import {isLoggedIn} from './isLoggedIn'


const routes = express.Router()

routes.use('/', authentication)
routes.use(isLoggedIn)


routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/users', users)
routes.use('/albums', albums)

routes.post('/api/likes/:albumId', (req, res, next) => {
  const userId = Number(req.body.userId)
  const albumId = Number(req.params.albumId)
  let canLikeFlag = true
  if (res.locals.isLoggedIn) {
    checkUserLikeByAlbumId(userId, albumId)
      .then((didUserLike) => {
        if (didUserLike) {
          canLikeFlag = false
          return res.json({canLikeFlag})
        }
        addLike(userId, albumId)
          .then((userLikes) => {
            getLikesByAlbumId(albumId)
              .then((albumLikes) => {
                const displayLikes = albumLikes.length
                return res.json({displayLikes, canLikeFlag})
              })
          })
      })
  } else {
    res.redirect('/sign-in')
  }
})


export default routes
