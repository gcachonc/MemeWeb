import app from "./server.js";
import connect from "./db/connect.js";

connect().then(async function onServerInit() {
  console.log(`DB connected`);

  app.listen(4000, () => {
    console.log("Server running at http://localhost:4000")
})
})