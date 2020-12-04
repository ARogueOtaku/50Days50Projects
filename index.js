const express = require("express");
const app = express();
const path = require("path");

app.use("/", express.static(path.join(__dirname, "/public")));

app.listen(process.env.PORT || 3030, () => {
  console.log(`App Started at PORT: ${process.env.PORT || 3030}`);
});
