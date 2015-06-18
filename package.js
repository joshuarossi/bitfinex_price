Package.describe({
  name: 'mjr:bitfinex-price',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'simple app to give live updating bitfinex BTCUSD prices',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.use(['meteor-platform']);
  api.addFiles(['common.js']);
  api.addFiles(['server/bitfinex_publish.js', 'bitfinex-price.js'], "server");
  api.add_files(["client/template.js", "client/template.html"], "client");
  api.export(["bitfinexPriceCollection", "bitfinex_price"]);
  api.export(["Bitfinex"], "server");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mjr:bitfinex-price');
  api.addFiles('bitfinex-price-tests.js');
});
Npm.depends({websocket: "1.0.19"});