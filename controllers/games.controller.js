const { response, request } = require("express");
const axios = require("axios");

const getGames = async (req = request, res = response) => {
  const newData = [];
  await axios({
    method: "GET",
    url: "https://www.freetogame.com/api/games",
  }).then((games) => {
    games.data.map((game) => {
      const { id, title, thumbnail, short_description, genre } = game;
      newData.push({
        id,
        title,
        thumbnail,
        short_description,
        genre,
      });
    });
    res.json(newData);
  });
};

module.exports = {
  getGames,
};
