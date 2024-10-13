function vaLogin() {
    // Get input values
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;

    // Check if email and password are correct
    if (email === 'admin@admin.com' && password === '123456') {
        alert('Login successful');
        
    } else {
        alert('Incorrect email or password');
        
    }
}