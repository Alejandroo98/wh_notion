const express = require('express');
const path = require('path');
const app = express();
const flash = require('connect-flash');

// require('./app');

app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* ROUTES */
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(require('./routes/index'));

/* CONTENIDO ESTATICO */
// let port = process.env.PORT || 3000;
var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Puerto conectado en ', port);
});
