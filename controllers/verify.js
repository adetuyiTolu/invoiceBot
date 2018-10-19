module.exports = (req, res) =>{

  const hubChallenge = req.query['hub.challenge'];
  const hubMode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const isTokenMatch = (token === 'invoice_bot');

  if(hubMode&& isTokenMatch){
    res.status(200).send(hubChallenge);
  }else{
    res.status(403);
  }
};
