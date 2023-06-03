// JavaScript code to handle search form submission

// Get the form element
const searchForm = document.querySelector('.search-form');

// Get the search results container
const searchResults = document.getElementById('search-results');

// Add an event listener to the form submission
searchForm.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the search query from the input field
  const query = document.querySelector('.search-input').value;

  // Clear previous search results
  searchResults.innerHTML = '';

  // Perform the search
  performSearch(query);
});

// Function to perform the search and display the results
function performSearch(query) {
  // Make an API call or perform server-side logic to retrieve the search results based on the query
  // In this example, let's assume we have a server-side endpoint called '/search' that returns the search results as JSON

  // Send a GET request to the '/search' endpoint with the query parameter
  fetch(`/search?query=${encodeURIComponent(query)}`)
    .then((response) => response.json())
    .then((data) => {
      // Process the search results and display them on the page
      displaySearchResults(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Function to display the search results on the page
function displaySearchResults(results) {
  // Iterate over the search results and create HTML elements to display them
  results.forEach((result) => {
    const article = document.createElement('article');
    const heading = document.createElement('h2');
    const description = document.createElement('p');

    heading.textContent = result.title;
    description.textContent = result.description;

    article.appendChild(heading);
    article.appendChild(description);

    searchResults.appendChild(article);
  });
}
