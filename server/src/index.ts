require('dotenv').config();
import http from "http";
import app from "./app";

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

function startServer() {
  server.listen(PORT, () => {
    console.log(`${"-".repeat(20)}Now-Playr Server${"-".repeat(20)}`);
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
