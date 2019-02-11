var jayson = require("jayson");
require("dotenv").config();

var client = jayson.client.http({
  port: process.env.SERVER_PORT
});

client.request("add", [1, 15], function(err, response) {
  if (err) throw err;
  console.log(response.result);
});
