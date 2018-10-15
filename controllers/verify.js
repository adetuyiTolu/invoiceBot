module.exports = (req, res) =>{

  const hubChallenge = req.query['hub.challenge'];
  const hubMode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const fb_token ="EAAGqArAZCv8MBADmiGQ3ruPQxxR5Rj7JmCT567wveZAX9wGmjjwuivaOhT4C0OpYZAbDwBXpZAZC1pD6BthkUj5JMATR0Korc0kMPT9ZCSpb6K7hZBYOfX8rOzeArs1XAWLNEnZCxybJfHbctkEMqXXZBdtq7NVU1lUUnhZCuz5HP10wZDZD"

  const isTokenMatch = (token === 'invoice_bot');

  if(hubMode&& isTokenMatch){
    res.status(200).send(hubChallenge);
  }else{
    res.status(403);
  }
};
