const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const karyawanRoutes = require('./app/routes/karyawanRoutes');
const jabatanRoutes = require('./app/routes/jabatanRoutes');
const departmentRoutes = require('./app/routes/departmentRoutes');

const dotenv = require('dotenv');
dotenv.config();
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use('/', karyawanRoutes);
app.use('/', jabatanRoutes);
app.use('/', departmentRoutes);

app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



// For initializing database
const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

//   db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });