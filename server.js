const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();


app.get('/', (req, res) => res.json({msg: 'Welcome the contact keeper API'}));

// define API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/contacts', require('./routes/api/contacts'));
app.use('/api/auth', require('./routes/api/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));


