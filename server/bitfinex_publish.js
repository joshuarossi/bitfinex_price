Meteor.publish('bitfinex_price_feed', function(){
  return bitfinexPriceCollection.find();
});