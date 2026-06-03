const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/expenseController');
const auth = require('../middleware/auth');

router.post('/', auth, ctrl.addExpense);
router.get('/', auth, ctrl.getExpenses);
router.put('/:id', auth, ctrl.updateExpense);
router.delete('/:id', auth, ctrl.deleteExpense);

module.exports = router;
