import model from '../models/notes.js'

export default {
  getAllNotes : async function (req, res){
    try {
      res.status(200).json(await model.find())
    } catch(err){
      console.log(err)
      res.status(500).json({success : false})
    }
  }
}