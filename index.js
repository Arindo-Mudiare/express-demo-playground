const express = require('express');
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
  })



app.use(express.json());

app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);
app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

