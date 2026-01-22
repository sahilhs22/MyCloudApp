const express = require("express");
const app = express();

// Azure provides the PORT automatically
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
