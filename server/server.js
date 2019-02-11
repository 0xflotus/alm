var jayson = require("jayson");
var config = require("../config/config.json");

var server = jayson.server({
  add: function(args, callback) {
    console.log(args);
    callback(null, args.reduce((a, b) => a + b));
  }
});

server.http().listen(config.SERVER_PORT);
