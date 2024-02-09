const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type - application/json

let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes');

app.use(express.json());


app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});
app.get("/api/test", (req, res) => {
res.json({ message: "test." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.use('/api/users', userRoutes);


app.listen(PORT, () => {
console.log(`Server is running on port
${PORT}.`);
});