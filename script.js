// Fetch data using the fetch method in JavaScript
document.addEventListener("DOMContentLoaded", function() {
  fetch('https://catfact.ninja/facts') // Replace with your API URL
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Log the data from the API
      console.log(data);

      // Display the data on the webpage
      const dataContainer = document.getElementById('data-container');
      dataContainer.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      // If the request fails, display an error message to the user
      console.error('There was an error fetching the data:', error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Sorry, there was an error fetching the data.';
      errorMessage.classList.add('error-message');
      document.body.appendChild(errorMessage);
    });
});