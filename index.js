const express = require('express');
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
  })

const friends = [
    {
        id: 0,
        name: 'Albert Einstein'
    },
    {
        id: 1,
        name: 'Sir Isaac Newton'
    },
];

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

