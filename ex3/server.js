const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1 style="color: red; text-align: center;">Server is Live! 🚀</h1>');
});

app.get('/student', (req, res) => {
  const student = {
    name: "Chris",
    marks: [85, 90, 78],
    total: 253,
    percentage: 84.33
  };
  res.json(student);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
