const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const helmet =  require('helmet');
require('dotenv').config();
const emailsRoutes = require('./routes/emails');
const comentarioRoutes = require('./routes/comentario');

const port = process.env.PORT || 4000;

// Middlewares.
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use( emailsRoutes );
app.use( comentarioRoutes );

app.listen(port, () => {
    console.log('server listening on port', port);
});

// Routes.

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// mongoDB connection.
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Connected to MongoDB ATLAS.'))
    .catch((error) => console.log(error));


