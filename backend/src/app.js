const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const studentRoutes = require("./routes/students");

app.use(bodyParser.json());
app.use("/api", studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
