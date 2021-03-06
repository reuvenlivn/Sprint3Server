const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());

 let items = [
            {id: 1, name: 'Carmos', price: 98982, isSelected:false},
            {id: 2, name: 'Carting', price: 1232, isSelected:false},
            {id: 3, name: 'Carmupo', price: 4232, isSelected:false},
            {id: 4, name: 'Carmuk', price: 387, isSelected:false}
            ];

let data = require('./EmailsRecommended.js');
let emails = data.emails;

data = require('./EventsRecommended.js');
let events = data.events;

// *** REST API ***

// for items
// LIST
app.get('/item', (req, res) => {
//   setTimeout(()=>res.json(items), 2000);
    res.json(items);
})


// READ
app.get('/item/:id', (req, res) => {
  const id = +req.params.id;
  const item = items.find(currItem => currItem.id === id);
  res.json(item)
})

// DELETE
app.delete('/item/:id', (req, res) => {
  const id = +req.params.id;
  items = items.filter(currItem => currItem.id !== id);
  res.json({msg: 'Deleted'});
})

// CREATE
app.post('/item', (req, res) => {
  const item =  req.body; 
  item.id = findNextId(items);
  items.push(item);
  res.json({msg: 'Item was added!'});
})

// UPDATE
app.put('/item', (req, res) => {
  const item =  req.body; 
  items = items.map(currItem => (currItem.id === item.id)? item: currItem);
  res.json({msg: 'Item was updates!'});
})

// for emails

// LIST
app.get('/email', (req, res) => {
//   setTimeout(()=>res.json(emails), 2000);
    res.json(emails);
})


// READ
app.get('/email/:id', (req, res) => {
  const id = +req.params.id;
  const email = emails.find(currItem => currItem.id === id);
  res.json(email)
})

// DELETE
app.delete('/email/:id', (req, res) => {
  const id = +req.params.id;
  emails = emails.filter(currItem => currItem.id !== id);
  res.json({msg: 'Deleted'});
})

// CREATE
app.post('/email', (req, res) => {
  const email =  req.body; 
  email.id = findNextId(emails);
  emails.push(email);
  res.json({msg: 'Item was added!'});
})

// UPDATE
app.put('/email', (req, res) => {
  const email =  req.body; 
  emails = emails.map(currItem => (currItem.id === email.id)? email: currItem);
  res.json({msg: 'Item was updates!'});
})

// for events

// LIST
app.get('/event', (req, res) => {
//   setTimeout(()=>res.json(emails), 2000);
    res.json(events);
})


// READ
app.get('/event/:id', (req, res) => {
  const id = +req.params.id;
  const event = events.find(currItem => currItem.id === id);
  res.json(event)
})

// DELETE
app.delete('/event/:id', (req, res) => {
  const id = +req.params.id;
  events = events.filter(currItem => currItem.id !== id);
  res.json({msg: 'Deleted'});
})

// CREATE
app.post('/event', (req, res) => {
  const event =  req.body; 
  event.id = findNextId(events);
  events.push(event);
  res.json({msg: 'Item was added!'});
})

// UPDATE
app.put('/event', (req, res) => {
  const event =  req.body; 
  events = events.map(currItem => (currItem.id === event.id)? event: currItem);
  res.json({msg: 'Item was updates!'});
})


////////////

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})

function findNextId(arr) {
    var maxId = 0;
    arr.forEach(item => {
        if (item.id > maxId) maxId = item.id;
    });
    return maxId + 1;
}



