import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged } from  "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyC_R8uBB2l3nJbqvRnhzVeOcBZ2uWDQJV8",
    authDomain: "concertflix-34571.firebaseapp.com",
    projectId: "concertflix-34571",
    storageBucket: "concertflix-34571.appspot.com",
    messagingSenderId: "730499750433",
    appId: "1:730499750433:web:a82beeb841f43f08da2160"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function mostrarToast(msg) {
    var x = document.getElementById("snackbar");
    x.innerHTML = msg;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
//elementos del html
const signinForm = document.querySelector('#SigninForm');
const usernameli = document.querySelector('#usernameli');
const usernamehtml = document.querySelector('#username');
const logout = document.querySelector('#logout');
const registrarli = document.querySelector('#registrarli');
const section = document.querySelector('section');

//event listeners
//Login
signinForm.addEventListener('submit', e => {
    e.preventDefault();
    const email= document.querySelector('#email').value;
    const pass = document.querySelector('#pass').value;

    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        // Signed in
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        signinForm.reset();
        mostrarToast("Usuario o Contraseña Incorrecto");
    });
})
//logout
logout.addEventListener('click', e =>{
    e.preventDefault();
    auth.signOut();
    
})

//cargar info al tener usuario conectado
onAuthStateChanged(auth, (user) => {
  if (user) {
    section.style.display = registrarli.style.display = 'none';
    usernameli.style.display = logout.style.display = 'initial';
    usernamehtml.innerHTML = user.email;
  } else {
    section.style.display = registrarli.style.display = 'grid';
    usernameli.style.display = logout.style.display = 'none';
    usernamehtml.innerHTML = "";
    signinForm.reset();
  }
});