// script.js
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get username and password
  const username = loginForm.querySelector('#username').value;
  const password = loginForm.querySelector('#password').value;

  // Validate credentials (replace with your actual authentication logic)
  if (username === 'admin' && password === 'admin') {
    // Store username in local storage
    localStorage.setItem('username', username);
    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
  } else {
    // Display error message
    alert('Invalid username or password.');
  }
});
