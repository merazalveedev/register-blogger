// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdw6Mb-bJ1_IgeXv91oAIcX9EfXqSBcDo",
    authDomain: "register-blogger.firebaseapp.com",
    projectId: "register-blogger",
    storageBucket: "register-blogger.firebasestorage.app",
    messagingSenderId: "423405338047",
    appId: "1:423405338047:web:6fe61da883da1a2d86f50a",
    measurementId: "G-6YS42QLQ6S"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Show Register Form
showRegister.addEventListener('click', () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

// Show Login Form
showLogin.addEventListener('click', () => {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// Login
document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Logged in successfully!');
      window.location.href = 'profile.html'; // Redirect to profile page
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Register
document.getElementById('register-btn').addEventListener('click', () => {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Registered successfully!');
      window.location.href = 'profile.html'; // Redirect to profile page
    })
    .catch((error) => {
      alert(error.message);
    });
});
