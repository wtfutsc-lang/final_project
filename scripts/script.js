const form = document.querySelector('.trip-form');
const fromPlace = document.getElementById("from");
const toPlace = document.getElementById("to-place");
const departDate = document.getElementById("depart");
const returnDate = document.getElementById("return");
const adults = parseInt(document.getElementById("adults"));
const children = parseInt(document.getElementById("children")) ;
const infants = parseInt(document.getElementById("infants"));
const travelClass = document.getElementById("plane-class");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (fromPlace.value === toPlace.value) {
      alert("Город вылета и город назначения не могут совпадать!");
      return;
    }

    if (  returnDate.value && returnDate.value < departDate.value) {
      alert("Дата возвращения не может быть раньше даты вылета!");
      return;
    }

    const bookingData = {
      from: fromPlace.value,
      to: toPlace.value,
      depart: departDate.value,
      return: returnDate .value, 
        adults: adults.value,
        children: children.value,
        infants: infants.value,
      travelClass: travelClass.value
      
    };

    let savedBookings = localStorage.getItem("wizzBookings");
    savedBookings = JSON.parse(savedBookings);

    savedBookings.push(bookingData);

    localStorage.setItem("wizzBookings", JSON.stringify(savedBookings));

    alert(`Успешно забронировано!`);

    form.reset();
  });