// Get references to the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add event listener to the search button
searchButton.addEventListener('click', performSearch);

// Perform the search operation
function performSearch() {
  const searchQuery = searchInput.value.toLowerCase(); // Get the search query and convert it to lowercase
  const articles = document.getElementsByTagName('article'); // Get all the articles

  // Loop through the articles and check if they match the search query
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const title = article.querySelector('h2').innerText.toLowerCase();
    const content = article.querySelector('p').innerText.toLowerCase();

    // Check if the title or content contains the search query
    if (title.includes(searchQuery) || content.includes(searchQuery)) {
      article.style.display = 'block'; // Show the article if it matches the search query
    } else {
      article.style.display = 'none'; // Hide the article if it doesn't match the search query
    }
  }
}
