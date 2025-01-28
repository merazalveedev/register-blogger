const auth = firebase.auth();

// Check if user is logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('user-email').textContent = user.email;
  } else {
    window.location.href = 'index.html'; // Redirect to login page
  }
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
  auth.signOut().then(() => {
    window.location.href = 'index.html'; // Redirect to login page
  });
});
