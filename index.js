const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public', {setHeaders: (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
}}));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
