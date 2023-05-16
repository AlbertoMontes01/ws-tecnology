const WebSocket = require('ws');
var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next ){
  
  res.render('websocket', {title: 'websocket'})
})

module.exports = router;

/*wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('Mensaje recibido desde el servidor www: %s', message);
    // Aquí procesas los datos recibidos desde el servidor www
  });
});
module.exports = function (server) {
 const wss = new WebSocket.Server({server});  
 wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    try{
      var xd = JSON.parse(message)
      var temperature = xd.Temperature;
      var humidity = xd.Humidity;
      console.log(`${temperature}, ${humidity}`)
    } catch(e) {
      console.log("error: ",e)
    }
    console.log(`Received message from websocketxd: ${message}`);

    // Respond to the message
    ws.send(`Echo: ${message}`);
  });

  ws.on("close", () => {
    console.log('Client has disconnected!');
  });
});
}; */

//var xd = JSON.parse()