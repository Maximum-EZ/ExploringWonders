// Get references to the search input and button
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const searchResults = document.getElementById("search-results");

// Add event listener to the search form
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const searchQuery = searchInput.value.toLowerCase(); // Get the search query and convert it to lowercase
  const articles = document.querySelectorAll(".articles .article"); // Get all the articles

  // Clear previous search results
  searchResults.innerHTML = "";

  // Loop through the articles and check if they match the search query
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const title = article.querySelector(".title").innerText.toLowerCase();
    const content = article.querySelector(".content").innerText.toLowerCase();

    // Check if the title or content contains the search query
    if (title.includes(searchQuery) || content.includes(searchQuery)) {
      // Show the article if it matches the search query
      article.style.display = "block";

      // Create a new result element and append it to the search results
      const result = document.createElement("div");
      result.innerText = title;
      searchResults.appendChild(result);
    } else {
      article.style.display = "none"; // Hide the article if it doesn't match the search query
    }
  }
});
