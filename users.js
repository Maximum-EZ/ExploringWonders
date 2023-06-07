function getActiveUserCount() {
    fetch('/users.php')
      .then(response => response.text())
      .then(count => {
        // Update the active user count on the webpage
        document.getElementById('active-users-count').textContent = count;
      });
  }
  
  // Fetch the active user count every 5 seconds (adjust the interval as needed)
  setInterval(getActiveUserCount, 5000);
  