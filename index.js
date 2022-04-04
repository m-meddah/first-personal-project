const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

const express = require('express');

const app = express();

app.set('views', 'app/views');
app.set('view engine', 'ejs');


app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'jbjqskhljjqvfmvqsbn<m'
}));

const router = require('./app/router');
app.use(router);

app.listen( PORT,  () => {
  console.log(`Listening on http://localhost:${PORT}`);
});