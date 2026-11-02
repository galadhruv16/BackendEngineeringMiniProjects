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
app.post("/api/expenses", (req, res) => {
  const expense = req.body;
  if (typeof expense.amount !== "number" || expense.amount <= 0) {
    return res.status(400).json({ error: "Invalid expense amount" });
  }
  const expensesFilePath = path.join(__dirname, "data", "expenses.json");
  const data = JSON.parse(fs.readFileSync(expensesFilePath, "utf-8"));
  // Add the new expense to the data
  const newExpense = {
    id: data.expenses.length + 1,
    amount: expense.amount,
    category: expense.category,
    date: expense.date,
    description: expense.description,
  };
  data.expenses.push(newExpense);
  fs.writeFileSync(expensesFilePath, JSON.stringify(data, null, 2));

  res.status(201).json(newExpense);
});
