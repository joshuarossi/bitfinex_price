Bitfinex = function(){
  message = {};
	this.url = 'http://apws.bitfinex.com/WSGateway';
	this.WebSocketClient = Npm.require('websocket').client;
	this.client = new this.WebSocketClient();
  this.messageHandler = Meteor.bindEnvironment(function(message) {
    message = JSON.parse(message.utf8Data);
    message = message.o.replace(/([a-zA-Z]+)/g,'"$1"');
    message = JSON.parse(message);
    bitfinexPriceCollection.upsert({'_id':'a'}, {$set: {'bitcoin_price': message.BestOffer}});
    _this.bitcoin_price = message.BestOffer;
    _this.message = message;
  });
  this.client.on('connectFailed', function(error) {
      console.log('Connect Error: ' + error.toString());
  });
  var _this = this;
	this.client.on('connect', function(connection) {
      this.connection = connection;
      console.log('WebSocket Client Connected');
      connection.on('error', function(error) {
          console.log("Connection Error: " + error.toString());
      });
      connection.on('close', function() {
          console.log('echo-protocol Connection Closed');
          this.connect(_this.url);
          this.subscribe();
      });
      connection.on('message', function(message) {
          _this.messageHandler(message);
      });
  });
  this.subscribeLevelOne = function () {
    frame = {};
    frame.m = 0;
    frame.i = 2;
    frame.n = "SubscribeLevel1";
    frame.o = JSON.stringify(
    {
        "ExchangeID":"0",
        "ProductPairID":"1"
    });
    _this.client.connection.send(JSON.stringify(frame));
  };
  
  this.connect = function (){
    this.client.connect(this.url)
    };
};
bfx = new Bitfinex();
bfx.connect();
Meteor.setTimeout(bfx.subscribeLevelOne, 2000);

