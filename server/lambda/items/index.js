const data = require("./items.json");

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
