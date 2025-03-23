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
    
    
    reserveBtn.disabled = !(name && email && paymentMethod);
  }
  
  
  validatePaymentDetails();
  
  nameInput.addEventListener("input", validatePaymentDetails);
  emailInput.addEventListener("input", validatePaymentDetails);
  paymentMethodInput.addEventListener("change", validatePaymentDetails);
  
  seats.forEach(seat => {
    seat.addEventListener("click", () => {
      
      if (!seat.classList.contains("occupied")) {
        seat.classList.toggle("selected"); 
      }
    });
  });
  

  reserveBtn.addEventListener("click", () => {
    let selectedSeats = [];
    seats.forEach(seat => {
      if (seat.classList.contains("selected")) {
        seat.classList.add("occupied");
        seat.classList.remove("selected");
        selectedSeats.push(seat);
      }
    });
    
    if (selectedSeats.length > 0) {
      alert("Seats reserved successfully!");
      

      reserveBtn.disabled = true;
      

      window.location.href = "../../../index.html";
      
    } else {
      alert("No seats selected.");
      return; 
    }
  });
});
