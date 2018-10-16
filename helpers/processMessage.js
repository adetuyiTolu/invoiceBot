const API_AI_TOKEN = 'dbc6bee5374b42aba01520252c1d01c0';
const FACEBOOK_ACCESS_TOKEN = 'EAAGqArAZCv8MBADmiGQ3ruPQxxR5Rj7JmCT567wveZAX9wGmjjwuivaOhT4C0OpYZAbDwBXpZAZC1pD6BthkUj5JMATR0Korc0kMPT9ZCSpb6K7hZBYOfX8rOzeArs1XAWLNEnZCxybJfHbctkEMqXXZBdtq7NVU1lUUnhZCuz5HP10wZDZD';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const sendTextMessage = (senderId, text) =>
{
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
      recipient: { id: senderId },
      message: { text },
    }
  });
};

module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
 const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'invoice_bot'});
 apiaiSession.on('response', (response) => {
   const result = response.result.fulfillment.speech;
   sendTextMessage(senderId, result);
 });
 apiaiSession.on('error', error => console.log(error));
 apiaiSession.end();
};
