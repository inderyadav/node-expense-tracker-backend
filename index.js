require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

app.use(cors());
app.use(express.json());    
app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);

//DB connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected ✅'))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    // console.log('Server running on port 3000');
    console.log(`Server running on port ${process.env.PORT}`);
})