document.addEventListener("DOMContentLoaded", () => {
  const movies = document.querySelectorAll('.movie');

  function checkVisibility() {
    movies.forEach(movie => {
      const rect = movie.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        movie.classList.add('visible'); 
      }
    });
  }

  checkVisibility(); 
  window.addEventListener('scroll', checkVisibility); 
});

document.addEventListener("DOMContentLoaded", () => {
  const TOTAL_SEATS = 15; 

  function updateAvailableSeats() {
    const reservedSeatsData = localStorage.getItem("reservedSeats") || "[]";
    const reservedSeats = JSON.parse(reservedSeatsData);
    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");

    let totalReservedCount = 0;

    reservations.forEach((reservation) => {
      totalReservedCount += reservation.seats.length;
    });

    if (totalReservedCount === 0 && reservedSeats.length > 0) {
      totalReservedCount = reservedSeats.length;
    }

    const availableSeats = TOTAL_SEATS - totalReservedCount;

    document.querySelectorAll('#seats-movie').forEach((element) => {
      element.textContent = availableSeats;
      if (availableSeats <= 3) {
        element.classList.add('limited-seats');
      } else {
        element.classList.remove('limited-seats');
      }
    });
  }

  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
      const movieTitle = this.closest('.movie').querySelector('h3').textContent;
      localStorage.setItem('selectedMovie', movieTitle);
    });
  });

  updateAvailableSeats();
});
