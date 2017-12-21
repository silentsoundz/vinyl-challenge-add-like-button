import db from '../db'

export default function checkEmailIsUsed(email) {
  return db.any('SELECT * FROM users WHERE email = $1', [email])
    .then((results) => {
      console.log(results)
      if (results.length === 0) {
        return false
      }
      return true
    })
}
