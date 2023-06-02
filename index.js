// Define routes
const routes = [
  { path: "/", file: "index.html" },
  { path: "/nutrition", file: "/articles/nutrition.html" },
  { path: "/ancient", file: "/articles/ancient.html" },
  { path: "/maldives", file: "/articles/maldives.html" },
  { path: "/grand-canyon", file: "/articles/grand-canyon.html" },
  { path: "/bali", file: "/articles/bali.html" },
  { path: "/petra", file: "/articles/petra.html" },
  { path: "/iceland", file: "/articles/iceland.html" },
  { path: "/serengeti", file: "/articles/serengeti.html" },
  { path: "/angkor", file: "/articles/angkor.html" },
  { path: "/tokyo", file: "/articles/tokyo.html" },
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
