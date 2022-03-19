const express = require('express');
const app = express();
const path = require('path');
// const bot = require('../bot.js');
const { getCitasManana } = require('../helpers/getCitasManana.js');
// const { sendMsgWh } = require('../helpers/sendMsgWh.js');
app.set('views', path.join(__dirname, '../public'));

require('../helpers/handleTime.js');

const SESSION_FILE_PATH = path.join(__dirname, './session.json');

app.get('/', async (req, res) => {
  // const respuesta = await bot();
  const citasManana = await getCitasManana();
  res.render('index', { citasManana });
});

app.post('/', async (req, res) => {
  // await sendMsgWh();
  // res.json({
  //   ok: true,
  // });
});

module.exports = app;
