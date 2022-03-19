const { sendMsgWh } = require('./sendMsgWh');

const handleTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  //   const fullDate = date.toLocaleDateString();

  const timeSendMsg = '2:07:00 AM';

  if (time == timeSendMsg) {
    console.log('_______________MENSAJE ENVIADO_______________');
    // sendMsgWh();
  }
  console.log(time, '_______________HORA ACTUAL_______________');
};

setInterval(function () {
  handleTime();
}, 1000);
