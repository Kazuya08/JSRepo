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

app.get("/parOuImpar", (req, res) => {
  // req.body vem no corpo da requisicao
  // req.query vem por query string link?chave:valorQueryString
  // req.params vem pelo link ex: link/params

  const par = parseInt(req.query.numero) % 2 === 0;

  res.send({
    resultado: par ? "par" : "impar",
  });
});

// app.get("/teste", (req, res) => {
//   res.send("OKAY");
// });

app.listen(port, () => console.log(`Executando Server na porta ${port}`));
