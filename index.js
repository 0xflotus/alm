var jayson = require("jayson");
require("dotenv").config();

var server = jayson.server({
  add: function(args, callback) {
    callback(null, args.reduce((a, b) => a + b));
  }
});

server.http().listen(process.env.SERVER_PORT);
