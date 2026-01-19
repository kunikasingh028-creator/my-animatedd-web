// 1. UI Toggle Logic (Parda hatne wala animation)
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if(registerBtn && loginBtn) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

// 2. Eye Icon Toggle Logic (Password dikhane/chhupane ke liye)
function setupEyeIcon(buttonId, inputId) {
    const btn = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    
    if(btn && input) {
        btn.addEventListener('click', function() {
            // Password ko text mein badalne ke liye
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            
            // Icon badalne ke liye (fa-eye-slash <-> fa-eye)
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
}

// Login aur Register dono ke liye eye icon activate karein
setupEyeIcon('toggleLoginPassword', 'login-password');
setupEyeIcon('toggleRegPassword', 'reg-password');

// 3. Form Submission (Firebase)
// Yahan hum ensure karte hain ki forms sahi se submit ho rahe hain
const signInForm = document.querySelector('.sign-in form');
const signUpForm = document.querySelector('.sign-up form');

if(signInForm) {
    signInForm.addEventListener('submit', () => {
        console.log("Login form submitted");
    });
}

if(signUpForm) {
    signUpForm.addEventListener('submit', () => {
        console.log("Registration form submitted");
    });
}
