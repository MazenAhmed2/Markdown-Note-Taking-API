import dotenv from 'dotenv';
import express from 'express';
import checkRouter from './routes/check.js'
import notesRouter from './routes/notes.js'
// dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());


// Routes
app.use('/check', checkRouter)
app.use('/notes', notesRouter)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
