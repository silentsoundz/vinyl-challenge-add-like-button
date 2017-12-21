import db from '../db'

export default function addLike(userId, albumId) {
  return db.oneOrNone('INSERT into AlbumLikes (user_id, albums_id) VALUES ($1, $2) RETURNING *', [userId, albumId])
}
