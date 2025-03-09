document.addEventListener("DOMContentLoaded", () => {
  const seats = document.querySelectorAll(".seat");
  const reserveBtn = document.getElementById("reserve-btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const paymentMethodInput = document.getElementById("payment-method");
  const dateInput = document.getElementById("movie-date");
  const movieTitleElement = document.querySelector(".movie-preview h3");
  
  const selectedMovie = localStorage.getItem('selectedMovie') || "Scott Pilgrim vs. The World";
  const selectedMovieId = localStorage.getItem('selectedMovieId') || "movie1";
  
  if (movieTitleElement) {
    movieTitleElement.textContent = selectedMovie;
  }
  
  const TOTAL_SEATS = 15;
  
  function loadReservedSeats() {
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    
    const movieReservations = reservations.filter(reservation => 
      reservation.movieId === selectedMovieId || 
      reservation.movie === selectedMovie
    );
    
    let reservedSeatsForMovie = [];
    movieReservations.forEach(reservation => {
      reservedSeatsForMovie = [...reservedSeatsForMovie, ...reservation.seats];
    });
    
    seats.forEach((seat, index) => {
      if (reservedSeatsForMovie.includes(index)) {
        seat.classList.add("occupied");
        seat.style.backgroundColor = "#FF0000"; 
      }
    });
    
    if (reservedSeatsForMovie.length === 0) {
      const reservedSeatsData = localStorage.getItem('reservedSeats');
      if (reservedSeatsData) {
        const reservedSeats = JSON.parse(reservedSeatsData);
        seats.forEach((seat, index) => {
          if (reservedSeats.includes(index)) {
            seat.classList.add("occupied");
            seat.style.backgroundColor = "#FF0000";
          }
        });
      }
    }
  }
  
  loadReservedSeats();
  
  function validatePaymentDetails() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const paymentMethod = paymentMethodInput.value;
    const date = dateInput.value;
    
    if (name && email && paymentMethod && date) {
      reserveBtn.disabled = false;
    } else {
      reserveBtn.disabled = true;
    }
  }
  
  reserveBtn.disabled = true;
  
  nameInput.addEventListener("input", validatePaymentDetails);
  emailInput.addEventListener("input", validatePaymentDetails);
  paymentMethodInput.addEventListener("change", validatePaymentDetails);
  dateInput.addEventListener("change", validatePaymentDetails);
  
  seats.forEach(seat => {
    seat.addEventListener("click", () => {
      if (!seat.classList.contains("occupied")) {
        seat.classList.toggle("selected");
      }
    });
  });
  
  reserveBtn.addEventListener("click", () => {
    let selectedSeats = [];
    
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    const reservedSeatsAll = JSON.parse(localStorage.getItem('reservedSeats') || '[]');
    
    seats.forEach((seat, index) => {
      if (seat.classList.contains("selected")) {
        seat.classList.add("occupied");
        seat.classList.remove("selected");
        seat.style.backgroundColor = "#FF0000"; 
        
        selectedSeats.push(index);
      }
    });
    
    if (selectedSeats.length > 0) {
      const reservationDetails = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        paymentMethod: paymentMethodInput.value,
        date: dateInput.value,
        movie: selectedMovie,
        movieId: selectedMovieId,
        seats: selectedSeats,
        timestamp: new Date().toISOString()
      };
      
      reservations.push(reservationDetails);
      localStorage.setItem('reservations', JSON.stringify(reservations));
      
      const allReservedSeats = [...reservedSeatsAll, ...selectedSeats];
      localStorage.setItem('reservedSeats', JSON.stringify(allReservedSeats));
      
      alert("Seats reserved successfully!");
      
      window.location.href = "../../index.html";
    } else {
      alert("No seats selected.");
    }
  });
});
