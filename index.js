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
  { path: "/angkor", file: "/articles/amalfi-coast.html" },
  { path: "/angkor", file: "/articles/istanbul.html" },
  { path: "/angkor", file: "/articles/great-barrier-reef.html" },
  { path: "/angkor", file: "/articles/stonehenge.html" },
  { path: "/angkor", file: "/articles/tea-ceremony.html" },
  { path: "/angkor", file: "/articles/amazon-rainforest.html" },
  { path: "/angkor", file: "/articles/italian.html" },
  { path: "/privacy", file: "/privacy.html" },
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
