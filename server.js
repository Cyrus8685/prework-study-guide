const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.SV_PORT || 10000;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
const http = require('http').Server(app);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.use(routes);

try { sequelize.sync(); console.log('Connected to PostgreSQL database!'); 
    http.listen(PORT, () => console.log (`Server Listening on Port ${PORT}`)); } 
    catch (err) 
    { console.error('Error connecting to the database:', err); }