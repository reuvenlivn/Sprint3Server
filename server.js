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

let emails = [
           {
              from: 'qqq@something.com', 
              to: 'me@myhome.com', 
              subject: 'stam email as example', 
              isRead:false,
              time: 1482084000000,
              content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'
          },

           {
              from: 'aaa@someone.com', 
              to: 'mywife@myhome.com', 
              subject: 'stam email from someone', 
              isRead:false,
              time: 1482132600000,
              content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'
            },

           {
             from: 'qqq@importent.com', 
             to: 'mykids@myhome.com', 
             subject: 'stam importent email ', 
             isRead:false,
             time: 1482156000000,
             content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'
           },

           {
             from: 'qqq@zevel.com', 
             to: 'me@myhome.com', 
             subject: 'stam zevel email example', 
             isRead:false,
             time: 1482159600000,
             content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'
           }

          ];

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
  item.id = findNextId();
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
  email.id = findNextId();
  emails.push(email);
  res.json({msg: 'Item was added!'});
})

// UPDATE
app.put('/email', (req, res) => {
  const email =  req.body; 
  emails = emails.map(currItem => (currItem.id === email.id)? email: currItem);
  res.json({msg: 'Item was updates!'});
})



////////////

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})

function findNextId() {
    var maxId = 0;
    items.forEach(item => {
        if (item.id > maxId) maxId = item.id;
    });
    return maxId + 1;
}



