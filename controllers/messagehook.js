const processMessage = require('../helpers/processMessage');

module.exports = (req,res) =>{
  const page = req.body.object;
  if(page === 'page'){
    var entries = req.body.entry;
    entries.forEach(event =>{
      if(event.message && event.message.text){
        processMessage(event);
      }
    });
    res.status(200).end();
  }
};
