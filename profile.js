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

// Profile Elements
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const logoutBtn = document.getElementById('logout-btn');

// Fetch User Info
auth.onAuthStateChanged(user => {
  if (user) {
    database.ref('users/' + user.uid).once('value')
      .then(snapshot => {
        const userData = snapshot.val();
        profileName.innerText = userData.name;
        profileEmail.innerText = userData.email;
      });
  } else {
    window.location.href = 'index.html';
  }
});

// Logout
logoutBtn.onclick = () => {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
};
