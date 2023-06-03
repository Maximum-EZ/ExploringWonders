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
  // Get the articles container
  const articlesContainer = document.querySelector('.articles');

  // Get all the articles
  const articles = articlesContainer.querySelectorAll('article');

  // Filter the articles based on the search query
  const filteredArticles = Array.from(articles).filter((article) => {
    const title = article.querySelector('h2').textContent.toLowerCase();
    const description = article.querySelector('p').textContent.toLowerCase();
    return title.includes(query.toLowerCase()) || description.includes(query.toLowerCase());
  });

  // Display the filtered articles as search results
  filteredArticles.forEach((article) => {
    // Clone the article element
    const clonedArticle = article.cloneNode(true);
    
    // Append the cloned article to the search results container
    searchResults.appendChild(clonedArticle);
  });
}
