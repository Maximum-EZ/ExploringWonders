const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

// Define routes
const routes = [
  { path: "/", file: "index.html" },
  { path: "/ancient", file: "/articles/ancient.html" },
  { path: "/technology", file: "/articles/technology.html" },
  { path: "/grand-canyon", file: "/articles/grand-canyon.html" },
  { path: "/bali", file: "/articles/bali.html" },
  { path: "/petra", file: "/articles/petra.html" },
  { path: "/iceland", file: "/articles/iceland.html" },
  { path: "/serengeti", file: "/articles/serengeti.html" },
  { path: "/angkor", file: "/articles/angkor.html" },
  { path: "/amalfi-coast", file: "/articles/amalfi-coast.html" },
  { path: "/istanbul", file: "/articles/istanbul.html" },
  { path: "/great-barrier-reef", file: "/articles/great-barrier-reef.html" },
  { path: "/stonehenge", file: "/articles/stonehenge.html" },
  { path: "/tea-ceremony", file: "/articles/tea-ceremony.html" },
  { path: "/amazon-rainforest", file: "/articles/amazon-rainforest.html" },
  { path: "/italian", file: "/articles/italian.html" },
  { path: "/privacy", file: "/privacy.html" },
  { path: "/404", file: "404.html" },
];

// Serve static files from the main folder
app.use(express.static(__dirname));

// Define routes using the routes array
routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, route.file));
  });
});

// Catch-all route
app.get("/*", (req, res) => {
  res.redirect("/404");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
