// netlify/functions/hello.js
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Netlify Functions!" })
  };
};
//# sourceMappingURL=hello.js.map
