require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const userRoute = require("./routes/User.Route");
var cors = require('cors')

mongoose.connect("mongodb://127.0.0.1:27017/document_duplicate", () => {
  console.log("connect db");
});
app.use(cors())
app.use(express.json());

app.use("/user", userRoute);
console.log(process.env.TZ);

var values = [
  { name: "someName1" },
  { name: "someName2" },
  { name: "someName4" },
  { name: "someName2" },
];

var valueArr = values.map(function (item) {
  return item.name;
});
var isDuplicate = valueArr.some(function (item, idx) {
  return valueArr.indexOf(item) != idx;
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
