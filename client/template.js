Template.registerHelper('bitcoin_price', function () {
  var a = bitcoinPrice.findOne({_id: 'a'});
  return a && a.bitcoin_price;
});
Meteor.subscribe('bitfinex_price ');