const Movie = require("../models/Movie");

const list = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (e) {
    console.error("Error fetching movies from database: ", e);
    res.status(500).send("Unable to fetch movies sorrys");
  }
};

module.exports = {
  list,
};
