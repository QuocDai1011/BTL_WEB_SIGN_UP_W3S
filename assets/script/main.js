document.querySelector('.right__btn').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.querySelector('.input[type="email"]');
    const password = document.querySelector('.input[type="password"]');
    const firstName = document.querySelector('.input[placeholder="first name"]');
    const lastName = document.querySelector('.input[placeholder="last name"]');
    const show = document.querySelector('.checked');

    // Kiểm tra email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        show.innerHTML = 'Email is empty.';
        email.focus();
        return;
    }

    // Kiểm tra mật khẩu
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        show.innerHTML = 'Password failed.'
        password.focus();
        return;
    }

    // Kiểm tra first name và last name
    if (firstName.value.trim() === "") {
        show.innerHTML = 'Please enter your fist name.'
        firstName.focus();
        return;
    }
    if (lastName.value.trim() === "") {
        show.innerHTML = 'Please enter your last name.'
        lastName.focus();
        return;
    }
});