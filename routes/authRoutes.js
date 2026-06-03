console.log('Auth routes loaded 🔥');

const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.post('/register', auth.register);
router.post('/login', auth.login);

app.get('/', (req, res) => {
  res.send('Expense Tracker Backend Running 🚀');
});

module.exports = router;