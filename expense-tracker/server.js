const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/api/expenses", (req, res) => {
  const expensesFilePath = path.join(__dirname, "data", "expenses.json");
  const data = JSON.parse(fs.readFileSync(expensesFilePath, "utf-8"));
  res.json(data);
});
app.listen(3500, () => {
  console.log("Server is running on port 3500");
});
