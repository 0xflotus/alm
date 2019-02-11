var jayson = require("jayson");
var config = require("./config.json");

var server = jayson.server({
  add: function(args, callback) {
    callback(null, args.reduce((a, b) => a + b));
  }
});

server.http().listen(config.SERVER_PORT);
