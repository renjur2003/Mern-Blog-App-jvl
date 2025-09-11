const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/blog')
.then(()=>console.log('MongoDB connected'))
.catch(err => console.error('DB error',err));

//use routes
app.use('/api/posts',postRoutes);


app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`);
})