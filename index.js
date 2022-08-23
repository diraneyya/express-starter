
import express from 'express';

const app = express();

app.get('/join-room', function (req, res) {
  if (req.query.room)
    res.send(`The room is '${req.query.room}'`);
  else
    res.send('You forgot to pass a room parameter');
})

app.listen(3333)