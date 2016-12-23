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

  //  let events = [
  //       {
  //           created: 1460672343000,
  //           id: "tqvmslyvqbxb",
  //           name: "bicycle workshop",
  //           status: "upcoming",
  //           time: 1482084000000,
  //           updated: 1460672343000,
  //           utc_offset: 7200000,
  //           waitlist_count: 0,
  //           yes_rsvp_count: 2,
  //           venue: {
  //               id: 13933482,
  //               name: "TAMI",
  //               lat: 32.171016693115234,
  //               lon: 34.85884094238281,
  //               repinned: false,
  //               address_1: "Kibbutz Galuyot 45",
  //               address_2: "Studio #106, 3rd Floor ",
  //               city: "Tel Aviv",
  //               country: "il",
  //               localized_country_name: "Israel"
  //           },
  //           group: {
  //               created: 1380728634000,
  //               name: "Tel Aviv Makers (TAMI)",
  //               id: 10521552,
  //               join_mode: "open",
  //               lat: 32.06999969482422,
  //               lon: 34.77000045776367,
  //               urlname: "Tel-Aviv-Makers-TAMI",
  //               who: "Hackers"
  //           },
  //           link: "https://www.meetup.com/Tel-Aviv-Makers-TAMI/events/236143188/",
  //           description: "<p>We will try to  learn how to fix a bicycle.<br/>You may bring along the bike or a wheel and we can tackle it together.<br/>The idea is to try to rebuild or fix the old parts and re-use them, whenever possible.<br/>There are tools, support and very few parts at the space.</p> ",
  //           visibility: "public"
  //       },

  //       {
  //           created: 1380812424000,
  //           id: "dxtgwgyvqbzb",
  //           name: "autoscheduled test",
  //           status: "upcoming",
  //           time: 1482179400000,
  //           updated: 1380812424000,
  //           utc_offset: -18000000,
  //           waitlist_count: 0,
  //           yes_rsvp_count: 2,
  //           venue: {
  //               id: 1543700,
  //               name: "632 Broadway, New York, NY 10012",
  //               lat: 40.72602462768555,
  //               lon: -73.99617767333984,
  //               repinned: false,
  //               address_1: "632 Broadway, New York, NY 10012",
  //               city: "New York",
  //               country: "us",
  //               localized_country_name: "USA",
  //               zip: "10012",
  //               state: "Ne"
  //           },
  //           group: {
  //               created: 1258123610000,
  //               name: "Meetup API Testing Sandbox",
  //               id: 1556336,
  //               join_mode: "open",
  //               lat: 40.70000076293945,
  //               lon: -73.98999786376953,
  //               urlname: "Meetup-API-Testing",
  //               who: "Developers"
  //           },
  //           link: "https://www.meetup.com/Meetup-API-Testing/events/229400621/",
  //           manual_attendance_count: 0,
  //           description: "<p>testing autoscheduled event</p> ",
  //           visibility: "public_limited"
  //       },
  //       {
  //           created: 1480541221000,
  //           duration: 3600000,
  //           id: "235940120",
  //           name: "Deep dive of deduplication using Apache Apex and RTS",
  //           status: "upcoming",
  //           time: 1482156000000,
  //           updated: 1480541233000,
  //           utc_offset: 7200000,
  //           waitlist_count: 0,
  //           yes_rsvp_count: 16,
  //           venue: {
  //               id: 24842033,
  //               name: "Webcast",
  //               lat: 32.08530044555664,
  //               lon: 34.781768798828125,
  //               repinned: false,
  //               address_1: "Online",
  //               city: "Tel Aviv-Yafo",
  //               country: "il",
  //               localized_country_name: "Israel"
  //           },
  //           group: {
  //               created: 1475691680000,
  //               name: "Big Data Hadoop Ingest Transform Apex Tel-Aviv Online",
  //               id: 20614288,
  //               join_mode: "open",
  //               lat: 32.06999969482422,
  //               lon: 34.77000045776367,
  //               urlname: "Big-Data-Hadoop-Ingest-Transform-Apex-Tel-Aviv-Online",
  //               who: "Members"
  //           },
  //           link: "https://www.meetup.com/Big-Data-Hadoop-Ingest-Transform-Apex-Tel-Aviv-Online/events/235940120/",
  //           manual_attendance_count: 0,
  //           description: "<p>Presenter: Bhupesh Chawda, Engineer at DataTorrent and Committer at Apache Apex.</p> <p>Abstract: This webinar will introduce the De-duplication functionality in Malhar. De-duplication is a very important part of the processing pipeline in ETL workflows. We will introduce the use cases and walk through the implementation details. Next we'll look at how to configure the Dedup operator for various use cases (time based expiry as well as batch de-duplication). We will also get into a demonstration of an application which uses De-duplication (Dedup) operator.</p> <p>Bio: Bhupesh Chadwa is a Software Engineer at DataTorrent and Committer for Apache Apex.</p> <p>Please register for the webinar at: <a href=\"https://attendee.gotowebinar.com/register/6110313049520480515\" class=\"linkified\">https://attendee.gotowebinar.com/register/6110313049520480515</a></p> <p>After registering, you will receive a confirmation email containing information about joining the webinar.</p> <p>For deeper engagement with <a href=\"http://apex.apache.org/\">Apache Apex</a>, <a href=\"https://www.datatorrent.com/download/?utm_source=meetup&amp;utm_medium=meetup_links&amp;utm_campaign=links_in_description\">download</a>, view past <a href=\"https://www.datatorrent.com/webinars/?utm_source=meetup&amp;utm_medium=meetup_links&amp;utm_campaign=links_in_description\">meetup webinars</a>, <a href=\"http://www.slideshare.net/DataTorrent\">slides</a>, and <a href=\"http://docs.datatorrent.com/?utm_source=meetup&amp;utm_medium=meetup_links&amp;utm_campaign=links_in_description\">docs</a>.</p> <p>To reduce time to market, look at operable <a href=\"https://www.datatorrent.com/apphub/?utm_source=meetup&amp;utm_campaign=links_in_description&amp;utm_medium=meetup_links\">app-templates</a> that you can quickly import and launch. </p> <p>Examples: <a href=\"https://www.datatorrent.com/apphub/hdfs-sync/?utm_source=meetup&amp;utm_campaign=links_in_description&amp;utm_medium=meetup_links\">HDFS-Sync</a>, <a href=\"https://www.datatorrent.com/apphub/kafka-to-hdfs-sync/?utm_source=meetup&amp;utm_campaign=links_in_description&amp;utm_medium=meetup_links\">Kafka-HDFS</a>, <a href=\"https://www.datatorrent.com/apphub/hdfs-to-hdfs-line-copy/?utm_source=meetup&amp;utm_campaign=links_in_description&amp;utm_medium=meetup_links\">HDFS-Line-Copy</a>, <a href=\"https://www.datatorrent.com/apphub/s3-to-hdfs-sync/?utm_source=meetup&amp;utm_campaign=links_in_description&amp;utm_medium=meetup_links\">S3-HDFS</a> and <a href=\"https://www.datatorrent.com/apphub/hdfs-to-kafka-sync/?utm_source=meetup&amp;utm_campaign=links_in_description&amp;utm_medium=meetup_links\">HDFS-Kafka</a>.</p> ",
  //           visibility: "public"
  //       }
  //   ]

let data = require('./EventsRecommended.js');
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
  event.id = findNextId();
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

function findNextId() {
    var maxId = 0;
    items.forEach(item => {
        if (item.id > maxId) maxId = item.id;
    });
    return maxId + 1;
}



