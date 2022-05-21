const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = 4200;
const router = require("./routes/index");
app.use(cors());
app.use(logger);
app.use(router);
app.use(errorHandler);
app.listen(PORT, () => console.log(`This app is running on port:${PORT}`));