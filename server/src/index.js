const express = require('express');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const jobsRouter = require('./routes/jobs');

const app = express();
app.use(cors());
app.use(express.json());

dbConnect();

app.use('/', jobsRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
