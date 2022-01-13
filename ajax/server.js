const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const port = 8080;

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/teste", (req, res) => {
  res.send("OKAY");
});

app.listen(port, () => console.log(`Executando Server na porta ${port}`));
