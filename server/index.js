const app = require('./config.js');

const port = (process.env.PORT || 8080);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
