const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

function sendWhatsApp(to, message) {
  return client.messages.create({
    from: 'whatsapp:' + process.env.TWILIO_PHONE,
    to: 'whatsapp:' + to,
    body: message
  });
}

module.exports = sendWhatsApp;
