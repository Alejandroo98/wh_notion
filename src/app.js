// const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
// const fs = require('fs');
// const path = require('path');
// const { getCitasManana } = require('./helpers/getCitasManana');
// let client;
// let sessionData;

// const SESSION_FILE_PATH = path.join(__dirname, './session.json');

// //Cuando ya tienes una sesion creada entrara a esta funcion
// const withSession = async () => {
//   console.log('INICIANDO SESION...');
//   getCitasManana();

//   sessionData = require(SESSION_FILE_PATH);
//   client = new Client({
//     session: sessionData,
//   });

//   client.on('ready', () => {
//     console.log('Client is ready!');
//   });

//   client.on('auth_failure', () => {
//     console.log('ERROR AL CONECTAR, INTENTA DE NUEVO');
//   });

//   client.initialize();
//   listenMessage();
// };

// // Estas fn genere el QR
// const withOutSession = () => {
//   console.log('NO TENEMOS SESION INICIADA');
//   client = new Client();

//   client.on('qr', (qr) => {
//     qrcode.generate(qr, { small: true });
//   });

//   client.on('authenticated', async (session) => {
//     //Guardamos las credencias de session para usar luego
//     sessionData = await session;
//     console.log(sessionData, 'Esta es la sesion!!!');

//     // fs.writeFile(SESSION_FILE_PATH, JSON.stringify(sessionData), (err) => {
//     //   if (err) {
//     //     console.log(err);
//     //   }
//     // });
//   });

//   client.on('ready', () => {
//     console.log('Client is ready!');
//   });

//   client.initialize();
//   listenMessage();
// };

// const sendMessage = async (to, message) => {
//   client.sendMessage(to, message);
// };

// //fn handle lisent message
// const listenMessage = () => {
//   const nroPrincipal = '0984266244';
//   const enlaceDirecto = 'https://n9.cl/swry0 ';
//   const msgSend = `Hola 🤖, ¿Tienes alguna duda? \n \n Agradecemos si nos enviás un mensaje a nuestro numero principal de WhatsApp, estaremos gustosos de ayudarte. \n \n • Nro principal: ${nroPrincipal} \n • Enlace directo: ${enlaceDirecto}`;

//   client.on('message', (msg) => {
//     const { from, to, body } = msg;
//     client.sendMessage(from, msgSend);
//     console.log(from, to, body);
//   });
// };

// fs.existsSync(SESSION_FILE_PATH) ? withSession() : withOutSession();

// module.exports = {
//   sendMessage,
// };
