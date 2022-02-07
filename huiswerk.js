
// Regular logging

const huiswerk = "week 1";

console.log(`De huiswerk opdracht van ${huiswerk} door Danian Marengo`);



// Express logging

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Week 1!');
})

app.listen(port, () => {
  console.log(`De huiswerk opdracht wordt nu gehost op localhost:${port}`);
})