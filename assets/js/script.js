document.addEventListener("DOMContentLoaded", () => {
  // Grab all movie elements
  const movies = document.querySelectorAll('.movie');

  // Function to check if a movie is in the viewport
  function checkVisibility() {
    movies.forEach(movie => {
      const rect = movie.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        movie.classList.add('visible'); // Add 'visible' class when movie is in view
      }
    });
  }

  // Call checkVisibility when the page loads and during scroll events
  checkVisibility(); // Run once when the page is loaded
  window.addEventListener('scroll', checkVisibility); // Run when scrolling
});
