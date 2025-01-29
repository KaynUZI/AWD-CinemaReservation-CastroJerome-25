document.addEventListener("DOMContentLoaded", () => {
  const seats = document.querySelectorAll(".seat");
  const reserveBtn = document.getElementById("reserve-btn");

  seats.forEach(seat => {
    seat.addEventListener("click", () => {
      seat.classList.toggle("selected");
    });
  });

  reserveBtn.addEventListener("click", () => {
    alert("Seats reserved successfully!");
    window.location.href = "../../../../pages/Payment/payment.html";
  });
});