// TODO: This is a problem, because we need to submit a new post here

const newPostHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#post-text').value.trim();
  // might need user info here or we can get it off of req.session.user

  if (text) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-type': 'application/json' },
    });

    if (response.ok) {
      alert('Post created!');
    } else {
      alert('Failed to create post.')
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', newPostHandler);