const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = "/api/users";
    this.usersRouteGame = "/api/games";

    //Connect to DB
    this.connectDB();
    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());

    //Read and parse body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersRoutePath, require("../routes/users.route"));
    this.app.use(this.usersRouteGame, require("../routes/games.route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Connectio to port: ", this.port);
    });
  }
}

module.exports = Server;
