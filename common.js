bitfinexPriceCollection = new Mongo.Collection('bitfinex_price');
bitfinex_price = function(){
  var a = bitfinexPriceCollection.findOne({_id: 'a'});
  return a && a.bitcoin_price;
}