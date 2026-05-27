const email = document.getElementById("signInEmail");
const password = document.getElementById("signInPassword");
const form = document.querySelector(".userForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const savedUserData = localStorage.getItem(email);

    if (!savedUserData) {
      alert("Пользователь с таким email не найден!");
      return;
    }

    const user = JSON.parse(savedUserData);

    if (user.password === password.value) {
      alert(`Добро пожаловать, ${user.name}! Вы успешно вошли.`);
    } else {
      alert("Неверный пароль!");
    }

    window.location.href = 'index.html';
  });