require('dotenv').config();
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const Router = require('./routes');

const app = express();

app.use(express.json());
app.use(Router);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));