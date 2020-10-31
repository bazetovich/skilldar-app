const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist/public'));
app.get('/*', (req, res) => {
  const filePath = './dist/public/index.html';
  const resolvedPath = path.resolve(filePath);

  res.sendFile(resolvedPath);
});

app.listen(3000, function () {
  console.log('Server started, try to acceess http://localhost:3000');
});
