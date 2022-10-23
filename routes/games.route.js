const { Router } = require("express");
const { getGames } = require("../controllers/games.controller");

const routerGame = Router();

routerGame.get("/", getGames);

module.exports = routerGame;
