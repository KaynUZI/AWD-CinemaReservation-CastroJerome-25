function selectSeat(seatNumber) {
    const seat = document.getElementById(`seat${seatNumber}`);
    if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
    } else {
      seat.classList.add('selected');
    }
  }
  
  document.getElementById('reserve-button').addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    
    if (selectedSeats.length === 0) {
      alert('Please select a seat before reserving.');
    } else {
      const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
      paymentModal.show();
    }
  });
  
  document.getElementById('confirmPayment').addEventListener('click', () => {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
  
    const selectedPaymentMethod = paymentMethod.value;
    alert(`You have selected ${selectedPaymentMethod} for your payment.`);
  
    window.location.href = '../../Index.html';
  });
  

  function createSeatGrid() {
    const seatGrid = document.getElementById('seatGrid');
    const seats = 10;
    let seatHTML = '';
  
    for (let i = 1; i <= seats; i++) {
      seatHTML += `<div class="seat" id="seat${i}" onclick="selectSeat(${i})">Seat ${i}</div>`;
    }
  
    seatGrid.innerHTML = seatHTML;
  }
  
  window.onload = () => {
    createSeatGrid();
  };
  