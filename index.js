import  express  from "express";
const app = express();
const port = 3000;

app.get("/header", (req, res) => {
  res.json(req.headers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});