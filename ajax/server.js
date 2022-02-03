const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const port = 8080;

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro");
    }

    res.end("Concluido com sucesso");
  });
});

app.post("/formulario", (req, res) => {
  console.log(req.body);
  res.send({
    ...req.body,
    id: 1,
  });
});

// app.get("/teste", (req, res) => {
//   res.send("OKAY");
// });

app.listen(port, () => console.log(`Executando Server na porta ${port}`));
