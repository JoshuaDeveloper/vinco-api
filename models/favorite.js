const { Schema, model } = require("mongoose");

const FavoriteSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  short_description: { type: String, required: true },
  genre: { type: String, required: true },
});

module.exports = model("Favorite", FavoriteSchema);
