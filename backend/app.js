const express = require("express");
const app = express();
const PORT = 4200;
const router = require("./routes/index");
const logger = require("./middleware/logger");
app.use(logger);
app.use(router);
app.listen(PORT, () => console.log(`This app is running on port:${PORT}`));
