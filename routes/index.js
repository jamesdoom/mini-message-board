const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

// GET new message form
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

// POST new message form submission
router.post('/new', function(req, res, next) {
  const { author, message } = req.body;

  // Create a new message object
  const newMessage = {
    text: message,
    user: author,
    added: new Date()
  };

  // Add the new message to the messages array
  messages.push(newMessage);

  // Redirect back to the home page to prevent duplicate submissions
  res.redirect('/');
});




module.exports = router;

