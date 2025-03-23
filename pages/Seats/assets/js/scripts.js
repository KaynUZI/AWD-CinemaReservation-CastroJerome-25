document.addEventListener("DOMContentLoaded", () => {
  const seats = document.querySelectorAll(".seat");
  const reserveBtn = document.getElementById("reserve-btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const paymentMethodInput = document.getElementById("payment-method");

  
  function validatePaymentDetails() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const paymentMethod = paymentMethodInput.value;

    
    reserveBtn.enable = !(name && email && paymentMethod);
  }

  
  nameInput.addEventListener("input", validatePaymentDetails);
  emailInput.addEventListener("input", validatePaymentDetails);
  paymentMethodInput.addEventListener("change", validatePaymentDetails);

  
  seats.forEach(seat => {
    seat.addEventListener("click", () => {
      // Check if the seat is not occupied
      if (!seat.classList.contains("occupied")) {
        seat.classList.toggle("selected"); // Toggle selection
      }
    });
  });

  // Reserve button logic
  reserveBtn.addEventListener("click", () => {
    let selectedSeats = [];

    seats.forEach(seat => {
      if (seat.classList.contains("selected")) {
        
        seat.classList.add("occupied");
        seat.classList.remove("selected"); 
        selectedSeats.push(seat); // Track selected seats
      }
    });

    if (selectedSeats.length > 0) {
      alert("Seats reserved successfully!");
    } else {
      alert("No seats selected.");
      return; // Exit if no seats were selected
    }

    
    reserveBtn.disable = true; 
   
    window.location.href = "../index.html"; 
  });
});