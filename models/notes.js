import mongoose from "mongoose";
import config from "../config.js";

mongoose.connect(config.DB_URL);

const schema = mongoose.Schema({
  title: String,
  filename: String,
});

export default mongoose.model("notes", schema);