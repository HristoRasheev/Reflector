function togglePassword() {
    const input = document.getElementById('passwordInput');
    input.type = input.type === 'password' ? 'text' : 'password';
}

function goToLogin() {
    window.location.href = 'login.html';
}