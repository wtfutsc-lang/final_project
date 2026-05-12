const form = document.querySelector('.userForm');


form.addEventListener("submit", async (e) => { 
    e.preventDefault();

    const fd = new FormData(form);
    
    const payload = Object.fromEntries(fd);
        
    console.log("формa:", payload);
   
});