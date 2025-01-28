const seats = {
    movie1: 10,
    movie2: 10,
  };
  
  function reserveSeat(movieId) {
    if (seats[movieId] > 0) {
      seats[movieId]--;
      document.getElementById(`seats-${movieId}`).textContent = seats[movieId];
  
      alert(`Seat reserved successfully for ${movieId.replace('movie', 'Movie ')}!`);
    } else {
      alert("Sorry, no seats available.");
    }
  }
  