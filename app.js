
const express = require("express");

const app = express();
const PUBLIC_DIR = "public";

app.use(express.static(PUBLIC_DIR));
   


app.post("/create", async (req, res) => {
    if (!req.body?.tel) {
      let error = {
        status: "400",
        message: "Не хватает данных",
      };
      res.statusCode = 400;
      res.send(error);
      return;
    }
  
    let tel1 = {
      name: req.body.tel
    };
  
    let data = await supabaseService.addModel(tel1);
  
    if (!data) {
      let error = {
        status: "400",
        message: "Ошибка при добавлении в базу данных",
      };
      res.statusCode = 400;
      res.send(error);
      return;
    }
  
    let answer = {
      status: "200",
      data
    };
  
    res.statusCode = 200;
    res.send(answer);
  });

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server started at port ${port}`));