// Check if the article should have a sidebar
function shouldAddSidebarToArticle(article) {
    return article.querySelector('h3') !== null;
  }
  
  // Create and append the sidebar
  function createSidebar() {
    var sidebar = document.createElement('div');
    sidebar.innerHTML = '<h2>Article Navigation</h2>';
  
    var articles = document.querySelectorAll('article');
    articles.forEach(function (article) {
      if (shouldAddSidebarToArticle(article)) {
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
  
        // Find the first h2 element in the article
        var h2Element = article.querySelector('h2');
        // Insert the sidebar after the h2 element
        h2Element.insertAdjacentElement('afterend', sidebarList);
      }
    });
  }
  
  // Call the function when the page finishes loading
  window.addEventListener('load', createSidebar);
  