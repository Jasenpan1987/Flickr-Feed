module.exports = app => {
  app.get("/api/feed", (req, res) => {
    return res.send("hello world");
  });
};
