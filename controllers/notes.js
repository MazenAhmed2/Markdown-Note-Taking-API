import model from "../models/notes.js";
import path from "path";
import showdown from "showdown";
import fs from "fs";

export default {
  getAllNotes: async function (req, res) {
    try {
      res.status(200).json(await model.find({}, {_id: true, title : true}));
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false });
    }
  },

  getNoteById: async function (req, res) {
    try {
      // Parse note ID
      const id = req.params.id;

      // Get filename from db
      const { filename } = (await model.find({ _id: id }))[0];

      // Get the file from the disk
      let file = fs.readFileSync(
        path.join(import.meta.dirname, "..", "uploads", filename),
      );

      // Convert the markdown to html
      let converter = new showdown.Converter();
      let result = converter.makeHtml(file.toString());

      // Send the response
      res.set("Content-Type", "text/html");
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false });
    }
  },

  uploadNote: async function (req, res) {
    try {
      // Parse Note title and filename
      const title = req.body.title;
      const filename = req.file.filename;

      // Insert in db
      let response = await model.insertOne({ title: title, filename : filename });

      // Send response
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false });
    }
  },

  deleteNoteById : async function (req, res) {
      try {
        // Parse note ID
        const id = req.params.id;

        // Get filename from db
        const { filename } = (await model.find({_id : id}))[0]

        // Delete note from db
        await model.deleteOne({ _id: id })

        // Delete note from disk
        fs.rmSync(path.join(import.meta.dirname, "..", "uploads", filename)
        );

        res.status(200).json({success : true})
      } catch (err) {
        console.log(err);
        res.status(204).json({ success: false });
      }
    },
};
