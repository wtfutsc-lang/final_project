const registration = async (event) => {
    event.preventDefault();
  
    
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("coniform_password").value;
  
   
    if (password !== confirmPassword ) {
      alert("Пароли не совпадают!");
      return;
    }

    if (password.length < 8 ) {
        alert("Пароль слишком короткий!");
        return;
      }
      try {
        const response = await fetch("/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            surname,
            email,
            password,
            confirmPassword
          }),
        });
    
  
    const data = await response.json();
  
    console.log(data);
  
   
    if (!response.ok) {
     throw new Error(data.message);
    }
    alert("Регистрация успешна");

} catch (error) {
  console.error(error);
  alert("Ошибка регистрации");
}
};

  document
    .querySelector(".userForm")
    .addEventListener("submit", registration);
  