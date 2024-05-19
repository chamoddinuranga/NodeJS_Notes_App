Sure! Here is the updated README file with your contact details:

---

# Note-Taking App

A simple and elegant note-taking application built with Bootstrap, EJS, Node.js, and MongoDB, featuring Google authentication.

## Features

- **User Authentication**: Secure Google OAuth 2.0 login.
- **Responsive UI**: Modern and responsive design using Bootstrap.
- **CRUD Operations**: Create, read, update, and delete notes.
- **Search Functionality**: Search notes by title or body.
- **Pagination**: View notes with pagination.

## Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: Google OAuth 2.0

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. **Clone the repository**:
    ```bash
   git clone https://github.com/chamoddinuranga/NodeJS_Notes_App.git
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add the following:
    ```plaintext
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    MONGODB_URI=your-mongodb-uri
    SESSION_SECRET=your-session-secret
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

5. **Visit the app**:
    Open your browser and navigate to `http://localhost:5000`.

## Usage

- **Sign In**: Use your Google account to log in.
- **Dashboard**: View your notes in a paginated list.
- **Add Note**: Click on "Add Note" to create a new note.
- **Edit Note**: Click on a note to view and edit its contents.
- **Delete Note**: Delete a note by clicking the delete button.
- **Search**: Use the search bar to find notes by title or content.

## Folder Structure

```
note-taking-app/
│
├── public/                 # Static files (CSS, JS, Images)
├── views/                  # EJS templates
│   ├── layouts/            # Layout files
│   ├── partials/           # Reusable partials
│   ├── ...                 # Other view files
│
├── server/
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # Route definitions
│   └── ...                 # Other server files
│
├── .env                    # Environment variables
├── app.js                  # Main application file
├── package.json            # NPM dependencies and scripts
└── README.md               # Documentation
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Contact

Feel free to contact me for any inquiries or issues:

- Email: [chamoddinuranga@gmail.com](mailto:chamoddinuranga@gmail.com)

## License

This project is licensed under the MIT License.

---

