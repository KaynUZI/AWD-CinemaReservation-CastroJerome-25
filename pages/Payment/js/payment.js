document.addEventListener("DOMContentLoaded", () => {
  const paymentForm = document.getElementById("payment-form");

  paymentForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const paymentMethod = document.getElementById("payment-method").value;

      if (name && email && paymentMethod) {
          alert(`Reservation confirmed!\nName: ${name}\nEmail: ${email}\nPayment: ${paymentMethod}`);
          
          window.location.href = "/pages/payment.html";
      } else {
          alert("Please fill in all the fields.");
      }
  });
});
