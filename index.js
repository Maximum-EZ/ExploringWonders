const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

const routes = [
  { path: "/", file: "index.html" },
  { path: "/about", file: "/articles/about.html" },
  { path: "/policy", file: "/policy.html" },
  { path: "/404", file: "404.html" },
];

app.use(express.static(__dirname));

routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, route.file));
  });
});

app.get("/*", (req, res) => {
  res.redirect("/404");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
