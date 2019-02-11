var jayson = require("jayson");
var config = require("./config.json");

var client = jayson.client.http({
  port: config.SERVER_PORT
});

client.request("add", [1, 15], function(err, response) {
  if (err) throw err;
  console.log(response.result);
});
