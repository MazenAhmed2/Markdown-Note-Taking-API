# Markdown Note-Taking API

A lightweight RESTful API for creating, managing, and rendering Markdown-based notes.  
Built with Node.js and Express, this application allows users to store notes in Markdown format and retrieve them as rendered HTML.

## Features

- **Create Notes**: Add new notes with a title and Markdown content.
- **Retrieve Notes**: Fetch all notes or a specific note by its ID.
- **Update Notes**: Modify existing notes.
- **Delete Notes**: Remove notes from the database.
- **Render Markdown**: Convert Markdown content to HTML for display purposes.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing notes.
- **Mongoose**: ODM for MongoDB.
- **Marked**: Markdown parser and compiler.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MazenAhmed2/Markdown-Note-Taking-API.git
   cd Markdown-Note-Taking-API
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   DB_URL=your_mongodb_connection_string
   ```

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Create a New Note

- **URL**: `POST /api/notes`
- **Body Parameters**:
  - `title` (string): Title of the note.
  - `content` (string): Markdown content of the note.
- **Response**: Created note object.

### Get All Notes

- **URL**: `GET /api/notes`
- **Response**: Array of all notes.

### Get a Note by ID

- **URL**: `GET /api/notes/:id`
- **Response**: Note object with the specified ID.

### Delete a Note

- **URL**: `DELETE /api/notes/:id`
- **Response**: Success message upon deletion.

### Render Markdown to HTML

- **URL**: `GET /api/notes/:id`
- **Response**: HTML-rendered content of the note.

## Project Structure

```
├── controllers
│   └── notes.js
|   └── check.js
├── models
│   └── notes.js
├── routes
│   └── notes.js
|   └── check.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
