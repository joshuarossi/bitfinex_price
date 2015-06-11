Meteor.publish('bitfinex_price', function(){
  return bitcoinPrice.findOne({_id: 'a'});
});