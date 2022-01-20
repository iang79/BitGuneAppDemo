const res = require("express/lib/response");
const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;
const urlMongoDb =
  "mongodb+srv://admin:admin12345@taskdb.i1cze.mongodb.net/mydb";

mongoose.connect(
  urlMongoDb,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    try {
      if (err) {
        throw err;
      } else {
        console.log("La conexion a la BBDD es correcta");

        app.listen(port, () => {
          console.log(
            "Servidor del API Rest esta funcionando en http://localhost:3000"
          );
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);
