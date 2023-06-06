// Check if the article should have a sidebar
function shouldAddSidebarToArticle(article) {
    // You can implement your own logic here to determine if the sidebar should be added to the given article
    // For example, you could check if the article has a specific class or attribute
    return article.querySelector('h3') !== null; // Add sidebar if the article has at least one <h3> heading
  }
  
  // Create and append the sidebar
  function createSidebar() {
    var sidebar = document.createElement('div');
    sidebar.innerHTML = '<h2>Article Navigation</h2>';
  
    var articles = document.querySelectorAll('article');
    articles.forEach(function (article) {
      if (shouldAddSidebarToArticle(article)) {
        // Create a list of links to each <h3> heading in the article
        var sidebarList = document.createElement('ul');
        var headings = article.querySelectorAll('h3');
        headings.forEach(function (heading) {
          var listItem = document.createElement('li');
          var link = document.createElement('a');
          link.textContent = heading.textContent;
          link.href = '#' + heading.id;
          listItem.appendChild(link);
          sidebarList.appendChild(listItem);
        });
  
        // Append the sidebar list to the sidebar container
        sidebar.appendChild(sidebarList);
  
        // Append the sidebar to the article
        article.insertBefore(sidebar.cloneNode(true), article.firstChild);
      }
    });
  }
  
  // Call the function when the page finishes loading
  window.addEventListener('load', createSidebar);
  