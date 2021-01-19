require("dotenv").config();
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken);

async function sendSMS(phoneNumber,code) {

    try{
        client.messages 
        .create({ 
           body: `Your Verification Code is ${code}`,  
           messagingServiceSid: 'MG888fe1a7b5da8a68ec3bc0bfa239a6c4',      
           to: `+91${phoneNumber}` 
         }) 
        .then(message => console.log(message.sid)) 
        return { error: false };
           
    }  catch (error) {
        console.error("send-sms-error", error);
        return {
          error: true,
          message: "Cannot send sms",
        };
      }
    
} 

module.exports = { sendSMS };

