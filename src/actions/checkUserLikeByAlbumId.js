import db from '../db'

export default function checkUserLikeByAlbumId(userId, albumId) {
  return db.oneOrNone('SELECT * FROM AlbumLikes WHERE user_id = $1 AND albums_id = $2', [userId, albumId])
}
