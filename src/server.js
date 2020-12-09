const server = require("express")();
const bodyParser = require("body-parser");
const PORT = 3000;

const Movies = require("./controllers/Movies");

server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.send("Hello!");
});

server.get("/movies/list", Movies.list);

server.listen(PORT, () => console.log(`Server started on port: ${PORT} 🚀`));
