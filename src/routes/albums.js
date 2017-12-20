import express from 'express'

import {
  getAlbums,
  getAlbumById,
  addLike,
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getAlbums()
    .then(albums => res.render('albums/index', {albums}))
    .catch(next)
})

router.get('/:albumID', (req, res, next) => {
  getAlbumById(req.params.albumID)
    .then(album => res.render('albums/album', {album}))
    .catch(next)
})

router.post('/:albumID', (req, res, next) => {
  
})


export default router
