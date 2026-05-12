
const form = document.querySelector('.userForm');


form.addEventListener("submit", async (e) => { 
    e.preventDefault();

    const fd = new FormData(form);
    
    const payload = Object.fromEntries(fd);
        
    if (payload.password !== payload.coniformPassword) {
        console.log("Пароли не совпадают!");
        return;
    }
    console.log("формa:", payload);
   
});