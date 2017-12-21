import db from '../db'

export default function getLikesByAlbumId(albumId) {
  return db.any('SELECT * FROM AlbumLikes WHERE albums_id = $1', [albumId])
}
