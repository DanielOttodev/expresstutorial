const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
app.use("/api", require("./routes/api"));
app.use(express.static(path.join(__dirname, "public")));
