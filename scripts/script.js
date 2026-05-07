
const form = document.querySelector('.trip-form');


form.addEventListener("submit", async (e) => { 
    e.preventDefault();

    const fd = new FormData(form);
    
    
    const payload = {
        tripType: fd.get("trip-type"),
        from: fd.get("from"),
        to: fd.get("to"),
        depart: fd.get("depart"),
        return: fd.get("return"),
        adults: Number(fd.get("adults")),
        children: Number(fd.get("children")),
        infants: Number(fd.get("infants")), 
        class: fd.get("class-of-travel")
    };

        //     const r = await fetch("/", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(payload), 
        // });
    console.log("формa:", payload);
   
});
  