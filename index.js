const express = require("express");
const cors = require("cors");
require("dotenv").config();

const weatherRoutes = require("../mypracticecode/routes/index");
const PORT = process.env.PORT || 5000;

const app = express();

// Routes
app.use("/api", require("./routes"));

let requestedIp = {};
/** {Count:
 *      timestamp
} */
app.use("/", (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requestedIp[ip]) {
    requestedIp[ip] = {
      count: 1,
      timestamp: Date.now(),
    };

    if()
  }
  next();
});

app.use(cors());

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
