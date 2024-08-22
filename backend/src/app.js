const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const studentRoutes = require("./routes/students");

app.use(cors());

app.use(bodyParser.json());

app.use(studentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
