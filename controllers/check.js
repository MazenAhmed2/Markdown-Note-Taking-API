export default {
  check : async (req, res) => {
    try {
      // Parsing text from the body
      console.log(req.body)
      const text = req.body.text
  
      // Fetch the data from 3rd-party API
      const response = await fetch(`https://api.languagetool.org/v2/check?text=${text}&language=en-US`)
      console.log(response)
      const data = await response.json()
      
      // Send the response
      res.status(200).json(data.matches)
      
    } catch(err){
      console.log(err)
      res.status(400).json({err : err})
    }
  }
}