// Define routes
const routes = [
  { path: "/", file: "index.html" },
  { path: "/nutrition", file: "nutrition.html" },
  { path: "/ancient", file: "ancient.html" },
  { path: "/go", file: "go.html" },
  { path: "/404", file: "404.html" },
];

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
