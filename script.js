// Toggle between Login and Register forms
const toggleLink = document.getElementById('toggleLink');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

toggleLink.addEventListener('click', function(event) {
    event.preventDefault();

    if (loginForm.classList.contains('active-form')) {
        // Switch to Register form
        loginForm.classList.remove('active-form');
        loginForm.classList.add('hidden-form');
        registerForm.classList.remove('hidden-form');
        registerForm.classList.add('active-form');
        toggleLink.textContent = 'Login here';
        document.querySelector('.toggle-form').innerHTML = 'Already have an account? <a href="#" id="toggleLink">Login here</a>';
    } else {
        // Switch to Login form
        registerForm.classList.remove('active-form');
        registerForm.classList.add('hidden-form');
        loginForm.classList.remove('hidden-form');
        loginForm.classList.add('active-form');
        toggleLink.textContent = 'Register here';
        document.querySelector('.toggle-form').innerHTML = 'Don\'t have an account? <a href="#" id="toggleLink">Register here</a>';
    }

    // Re-attach the event listener to the new link
    document.getElementById('toggleLink').addEventListener('click', arguments.callee);
});

// Form submission handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful!');
        // Add login logic here
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (firstName && lastName && regEmail && regPassword && confirmPassword) {
        if (regPassword === confirmPassword) {
            alert('Registration successful!');
            // Add registration logic here
        } else {
            alert('Passwords do not match.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});