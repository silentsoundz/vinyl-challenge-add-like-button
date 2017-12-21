import express from 'express'

import albums from './albums'
import users from './users'
import authentication from './authentication'
import {addLike} from '../actions'
import {checkUserLikeByAlbumId} from '../actions'
import {getLikesByAlbumId} from '../actions'
import {isLoggedIn} from './isLoggedIn'

const routes = express.Router()

routes.use(isLoggedIn)

routes.use('/', authentication)

routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/users', users)
routes.use('/albums', albums)

routes.post('/api/likes/:albumId', (req, res, next) => {
  console.log( "req.body:", req.body )
  const {userId} = req.body
  const {albumId} = req.params
  console.log( "albumId:", albumId )
  let canLikeFlag = true
  if (res.locals.isLoggedin) {
    checkUserLikeByAlbumId(userId, albumId)
      .then((didUserLike) => {
        if (didUserLike) {
          canLikeFlag = false
          console.log('this already likes this album', didUserLike)
          return res.json({canLikeFlag})
        }
        addLike(userId, albumId)
          .then((userLikes) => {
            console.log('userlikes api', userLikes)
            getLikesByAlbumId(albumId)
              .then((albumLikes) => {
                const displayLikes = albumLikes.length
                console.log('userlikes api', displayLikes)
                return res.json({displayLikes})
              })
          })
        return null
      })
  } else {
    res.redirect('/sign-in')
  }
})


export default routes
