const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./models/Data.js');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/devjobs');

app.get('/getJobs', (req, res) => {
  DataModel.find()
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => res.json(err));
});

app.get('/getJobs/:id', (req, res) => {
  const jobId = req.params.id;
  DataModel.findOne({ id: jobId })
    .then((job) => {
      if (job) {
        res.json(job);
      } else {
        res.status(404).json({ message: 'Job not found' });
      }
    })
    .catch((err) => {
      console.error('Error fetching job:', err);
      res.status(500).json({ message: 'Server error', error: err });
    });
});

app.get('/jobs', async (req, res) => {
  try {
    const { search, location, contract } = req.query;
    const filter = {};

    if (search) {
      filter.$or = [{ title: { $regex: search, $options: 'i' } }, { company: { $regex: search, $options: 'i' } }];
    }

    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    if (contract) {
      filter.contract = contract;
    }

    const jobs = await DataModel.find(filter);
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// app.get('/getJobs', async (req, res) => {
//   try {
//     const jobs = await DataModel.find();
//     res.json(jobs);
//   } catch (err) {
//     console.error('Error fetching jobs:', err);
//     res.status(500).json({ message: 'Server error', error: err });
//   }
// });
//
// app.get('/getJobs/:id', async (req, res) => {
//   const jobId = req.params.id;
//
//   try {
//     const job = await DataModel.findOne({ id: jobId });
//     if (job) {
//       res.json(job);
//     } else {
//       res.status(404).json({ message: 'Job not found' });
//     }
//   } catch (err) {
//     console.error('Error fetching job:', err);
//     res.status(500).json({ message: 'Server error', error: err });
//   }
// });
