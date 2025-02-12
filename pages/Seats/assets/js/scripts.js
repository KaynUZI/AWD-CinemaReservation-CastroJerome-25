document.addEventListener("DOMContentLoaded", () => {
  const seats = document.querySelectorAll(".seat");
  const reserveBtn = document.getElementById("reserve-btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const paymentMethodInput = document.getElementById("payment-method");

  // Function to validate payment details
  function validatePaymentDetails() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const paymentMethod = paymentMethodInput.value;

    // Enable or disable the reserve button based on input validation
    reserveBtn.enable = !(name && email && paymentMethod);
  }

  // Event listeners for input fields
  nameInput.addEventListener("input", validatePaymentDetails);
  emailInput.addEventListener("input", validatePaymentDetails);
  paymentMethodInput.addEventListener("change", validatePaymentDetails);

  // Seat selection logic
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
        // Ensure the seat is marked as occupied
        seat.classList.add("occupied");
        seat.classList.remove("selected"); // Deselect the seat visually
        selectedSeats.push(seat); // Track selected seats
      }
    });

    if (selectedSeats.length > 0) {
      alert("Seats reserved successfully!");
    } else {
      alert("No seats selected.");
      return; // Exit if no seats were selected
    }

    // Disable the reserve button to prevent further reservations
    reserveBtn.disable = true; // Disable the button after reservation
    // Optionally redirect or refresh the page
    window.location.href = "/index.html"; // Change this as needed
  });
});