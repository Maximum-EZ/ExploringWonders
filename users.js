function testActiveUserCount() {
    setInterval(() => {
      // Send a request to the server to fetch the active user count
      fetch('/users.php')
        .then(response => response.text())
        .then(count => {
          console.log('Active User Count:', count);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, 5000); // Adjust the interval as needed (here, it fetches every 5 seconds)
  }
  
  // Start testing the active user count
  testActiveUserCount();
  