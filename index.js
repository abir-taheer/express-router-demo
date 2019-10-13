const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);

const app_port = process.env.PORT || 3001;

app.use(require("./routes/index"));

// Put the 404 route at the end otherwise it might interfere with other routes
app.use(require("./routes/404"));

server.listen(app_port, () => {
  console.log('listening on *:' + app_port);
});
