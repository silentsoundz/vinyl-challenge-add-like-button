console.log('hello from the browser JavaScript')

const likeButton = document.querySelector('.like-button')
const logOutButton = document.querySelector('.sign-out')

const likeAlbum = () => {
  const userId = Number(likeButton.getAttribute('data-id'))
  const albumId = Number(likeButton.getAttribute('data-albumId'))
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
      if (!response.canLikeFlag) {
        likeButton.classList.add('turnRed')
      } else {
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
    .then((response) => {
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
