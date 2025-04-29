import model from '../models/notes.js'
import path from 'path'
import showdown from 'showdown'
import fs from 'fs'


export default {
  getAllNotes : async function (req, res){
    try {
      res.status(200).json(await model.find())
    } catch(err){
      console.log(err)
      res.status(500).json({success : false})
    }
  }, 

  getNoteById : async function (req, res){
    try {
      // Parse note ID
      const id = req.params.id 

      const {filename} = (await model.find({_id : id}))[0]
    
      let file = fs.readFileSync(path.join(import.meta.dirname, '..', 'uploads', filename))

      let converter = new showdown.Converter()
      let result = converter.makeHtml(file.toString())

      res.set('Content-Type', 'text/html')
      res.status(200).send(result)
    } catch(err){
      console.log(err)
      res.status(500).json({success : false})
    }
  }, 

  uploadNote : async function (req, res){
    try {
      // Parse Note title and filename
      const title = req.body.title
      const filename = req.file.filename

      // Insert in db
      let response = await model.insertOne({title, filename})

      // Send response
      res.status(200).json(response)
    } catch(err){
      console.log(err)
      res.status(500).json({success : false})
    }
  }, 
}