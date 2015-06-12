Template.registerHelper('bitfinex_price_helper', function () {
  var a = bitfinexPriceCollection.findOne({_id: 'a'});
  return a && a.bitcoin_price;
});
bitfinex_subscription = Meteor.subscribe('bitfinex_price_feed');