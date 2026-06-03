const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  const expense = await Expense.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(expense);
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ userId: req.user.id });
  res.json(expenses);
};

exports.updateExpense = async (req, res) => {
  const expense = await Expense.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id }, // 🔥 security
    req.body,
    { new: true }
  );

  if (!expense) return res.status(404).send('Not found');

  res.json(expense);
};

exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id
  });

  if (!expense) return res.status(404).send('Not found');

  res.send('Deleted successfully');
};