const { sendMessage } = require('../app');
const citasManana = require('../DB/contactos.json');
// const { getCitasManana } = require('./getCitasManana');

const sendMsgWh = async () => {
  // const citasManana = await getCitasManana();

  try {
    citasManana.forEach((data) => {
      const enlace = 'https://n9.cl/swry0';
      const tlf = data.telefono;
      const primerNombre = data.nombres.split(' ')[0];
      const msg_important = `🔴 No responder este mensaje, si tiene alguna duda por favor envíenos un mensaje a nuestro numero de WhatsApp en el siguiente enlace. 🔴 \n \n • Enlace: ${enlace}`;
      const name = 'Depilcenter - Centro de depilación 💃';

      const msg = `Señorita  ${primerNombre}, nos da gusto saludarle ✨ . \n \n Le recordamos su cita el día de *mañana a las ${data.hora}* para su sesión de depilación. \n \n Contamos con su visita y agradecemos su puntualidad. ✅ \n \n ${msg_important} \n \n ${name}`;

      if (tlf) {
        sendMessage(tlf, msg);
      }
    });
  } catch (error) {
    console.log('HERRORRRR');
  }
};

module.exports = {
  sendMsgWh,
};
