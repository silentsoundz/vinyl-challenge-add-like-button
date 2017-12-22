import express from 'express'

import {
  getAlbums,
  getAlbumById,
  getLikesByAlbumId,
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  if (!res.locals.isLoggedIn) {
    res.redirect('/sign-in')
  } else {
    getAlbums()
      .then(albums => res.render('albums/index', {albums}))
      .catch(next)
  }
})

router.get('/:albumID', (req, res, next) => {
  const user = req.session.user
  if (!res.locals.isLoggedIn) {
    res.redirect('/sign-in')
  } else {
    getLikesByAlbumId(req.params.albumID)
      .then((albumLikes) => {
        const albumLiked = albumLikes.length
        getAlbumById(req.params.albumID)
          .then(album => res.render('albums/album', {album, albumLiked, user}))
          .catch(next)
      })
  }
})


export default router
