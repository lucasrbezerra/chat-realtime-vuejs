const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render({ message: "Hello World!" });
});

let messages = [];

io.on("connection", socket => {
  console.log(`New connection ${socket.id}`);

  socket.emit('previousMessages', messages);

  socket.on('sendMessage', data => {
    console.log("Data:", data);
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
  });
});

server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
