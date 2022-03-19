const { Client: ClientNotion, LogLevel } = require('@notionhq/client');

//NOTION API
const notion = new ClientNotion({
  auth: process.env.SECRET_NOTION,
  logLevel: LogLevel.DEBUG,
});
const databaseId = '21678fa5f3e341609c25ddda20c02ce3';

const formatDate = () => {
  const today = new Date();
  let dia = '';
  let mes = '';
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowDate = tomorrow.toLocaleDateString();
  const dateSplit = tomorrowDate.split('/');

  if (dateSplit[0] < 10) {
    dia = `0${dateSplit[0]}`;
  } else {
    dia = dateSplit[0];
  }

  if (dateSplit[1].length == '1') {
    mes = `0${dateSplit[1]}`;
  } else {
    mes = dateSplit[1];
  }

  const newDate = `${dateSplit[2]}-${dia}-${mes}`;

  return newDate;
};

const formatTime = (time) => {
  const hora = time.split(':');

  return `${hora[0]}:${hora[1]} `;
};

const getCitasManana = async () => {
  let sendMessage = [
    // {
    //   nombres: 'Jeffeson Alava',
    //   telefono: '593987318452@c.us',
    //   fecha: '02-10-2022',
    //   hora: '12:30',
    //   "['¿Recordar cita?']": 'RECORDAR CITA',
    // },
    // {
    //   nombres: 'Depilcenter Condado',
    //   telefono: '593984266244@c.us',
    //   fecha: '02-10-2022',
    //   hora: '10:30',
    //   "['¿Recordar cita?']": 'RECORDAR CITA',
    // },
  ];

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'Fecha y hora',
            date: {
              equals: formatDate(),
            },
          },
        ],
      },
    });

    const propertiesObjet = response.results;

    propertiesObjet.forEach((value) => {
      let telefono = false;
      const recordar = value.properties['¿Recordar cita?'].select.name || 'RECORDAR CITA';
      const nombres = value.properties.nombresWh.rollup.array[0].title[0].plain_text;
      const numDb = value.properties.Telefono.rollup.array[0].phone_number.trim().slice(1) || false;

      if (numDb) {
        telefono = '593' + numDb + '@c.us';
      }

      const getfechaYHora = value.properties['Fecha y hora'].date.start;
      const newFechaYHora = new Date(getfechaYHora);
      const hora = formatTime(newFechaYHora.toLocaleTimeString());
      let fechaChange = newFechaYHora.toLocaleDateString().split('/');

      let fecha = `${fechaChange[1]}-${fechaChange[0]}-${fechaChange[2]}`;

      if (recordar == 'RECORDAR CITA') {
        sendMessage = [...sendMessage, { nombres, telefono, fecha, hora }];
      }
    });
  } catch (error) {
    console.error(error);
  }
  return sendMessage;
};

module.exports = {
  getCitasManana,
};
