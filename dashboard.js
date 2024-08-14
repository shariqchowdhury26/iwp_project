// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
  // Get username from local storage
  const username = localStorage.getItem('username');

  // Display the username
  const usernameElement = document.querySelector('#username');
  if (username) {
    usernameElement.textContent = username;
  }

  // Redirect to courses page after 3 seconds
  setTimeout(() => {
    window.location.href = 'courses.html';
  }, 3000); // 3000 milliseconds = 3 seconds
});
