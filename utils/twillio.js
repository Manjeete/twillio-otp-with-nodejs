require('dotenv').config();

const accountSid = "<TWILIO_ACCOUNT_SID>";
const authToken = "<TWILIO_AUTH_TOKEN>";

const sendSms = async (phone, message) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: message,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: phone
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;