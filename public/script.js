console.log('hello from the browser JavaScript')

const likeButton = document.querySelector('.like-button')
const logOutButton = document.querySelector('.sign-out')

const likeAlbum = () => {
  const userId = Number(likeButton.getAttribute('data-id'))
  const albumId = Number(likeButton.getAttribute('data-albumId'))
  console.log('userId:', userId)
  console.log('albumId:', albumId)
  const options = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({userId}),
    credentials: 'include',
  }
  const url = `/api/likes/${albumId}`
  return fetch(url, options)
    .then(response => response.json())
    .then((response) => {
      if (response.canLikeFlag === false) {
        likeButton.classList.add('turnRed')
      } else {
        console.log('response', response.canLikeFlag)
        likeButton.innerHTML = response.displayLikes
      }
    })
}

const logOut = () => {
  const url = '/logout'
  const options = {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
  }
  return fetch(url, options)
    .then(response => response.json())
    .then((response) => {
      console.log('response:', response)
      window.location.pathname = '/sign-in'
      return null
    })
}

if (likeButton) {
  likeButton.addEventListener('click', likeAlbum)
}

if (logOutButton) {
  logOutButton.addEventListener('click', logOut)
}
