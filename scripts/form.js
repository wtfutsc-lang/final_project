const form = document.querySelector(".userForm");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("coniform_password");


  

  form.addEventListener("submit", (event) => {

    event.preventDefault();
    if (password.value !== confirmPassword.value) {
      alert("Пароли не совпадают!");
      return; 
    }

    const userData = {
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value 
    };
    console.log(userData);
    
    localStorage.setItem(email.value, JSON.stringify(userData));

    alert("Регистрация успешна!");
    window.location.href = 'index.html';
  });
