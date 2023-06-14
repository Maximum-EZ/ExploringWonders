// Sample article data
const articles = [
  {
    title: "Article 1",
    description: "Description of Article 1",
    link: "/bali.html",
  },
  {
    title: "Article 2",
    description: "Description of Article 2",
    link: "/article2.html",
  },
  {
    title: "Article 3",
    description: "Description of Article 3",
    link: "/article3.html",
  },
  // Add more articles as needed
];

// Function to generate personalized recommendations
function generateRecommendations() {
  // Logic to determine user preferences or browsing history
  // You can customize this logic based on your requirements

  // For this example, let's assume the user prefers articles related to ancient civilizations
  const userPreferences = ["ancient civilizations"];

  // Filter articles based on user preferences
  const recommendedArticles = articles.filter((article) => {
    // Check if any of the user preferences match the article's title or description
    return userPreferences.some((preference) => {
      return (
        article.title.toLowerCase().includes(preference) ||
        article.description.toLowerCase().includes(preference)
      );
    });
  });

  // Display recommended articles in the related articles section
  const relatedArticlesContainer = document.getElementById("related-articles");

  // Clear existing content in the container
  relatedArticlesContainer.innerHTML = "";

  // Generate HTML for each recommended article
  recommendedArticles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <a href="${article.link}">Read more</a>
    `;
    relatedArticlesContainer.appendChild(articleElement);
  });
}

// Call the function to generate recommendations when the page loads
window.addEventListener("load", generateRecommendations);
