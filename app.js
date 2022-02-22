const express = require('express');
const routes = require('./routes.js');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

const timeLog = (req, res, next) => {

  const method = req.method
  const data = new Date()
  
  console.log(method)
  console.log(data)
  
  next();
};

app.use(timeLog);

app.use('/', routes);

app.listen(PORT, () => {
  console.log('Link to the server:');
  console.log(BASE_PATH);
});
