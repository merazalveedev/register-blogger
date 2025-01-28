// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdw6Mb-bJ1_IgeXv91oAIcX9EfXqSBcDo",
    authDomain: "register-blogger.firebaseapp.com",
    databaseURL: "https://register-blogger-default-rtdb.firebaseio.com/"
    projectId: "register-blogger",
    storageBucket: "register-blogger.firebasestorage.app",
    messagingSenderId: "423405338047",
    appId: "1:423405338047:web:6fe61da883da1a2d86f50a",
    measurementId: "G-6YS42QLQ6S"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Elements
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const showLogin = document.getElementById('show-login');
const showRegister = document.getElementById('show-register');

// Show Register Page
showRegister.onclick = () => {
  loginPage.classList.remove('active');
  registerPage.classList.add('active');
};

// Show Login Page
showLogin.onclick = () => {
  registerPage.classList.remove('active');
  loginPage.classList.add('active');
};

// Login
loginBtn.onclick = () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'profile.html';
    })
    .catch(error => alert(error.message));
};

// Register
registerBtn.onclick = () => {
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      return database.ref('users/' + user.uid).set({ name, email });
    })
    .then(() => {
      alert('Registration successful!');
      window.location.href = 'index.html';
    })
    .catch(error => alert(error.message));
};
