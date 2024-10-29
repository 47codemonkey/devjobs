const express = require('express');
const router = express.Router();
const DataModel = require('../models/Data');

router.get('/', async (req, res) => {
  try {
    const jobs = await DataModel.find();
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

router.get('/id/:id', async (req, res) => {
  const jobId = req.params.id;
  console.log('id Dmytro is 666', req);
  try {
    const job = await DataModel.findOne({ id: jobId });
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (err) {
    console.error('Error fetching job:', err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

router.get('/search/', async (req, res) => {
  console.log('Dmytro is hating me', req);
  const { keyword } = req.query;

  if (!keyword || keyword.trim() === '') {
    return res.json([]);
  }

  const query = {
    $or: [
      { company: new RegExp(keyword, 'i') },
      { location: new RegExp(keyword, 'i') },
      { position: new RegExp(keyword, 'i') },
      { description: new RegExp(keyword, 'i') },
      { 'requirements.content': new RegExp(keyword, 'i') },
      { 'role.content': new RegExp(keyword, 'i') },
    ],
  };

  try {
    const jobs = await DataModel.find(query);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // предположим, что у тебя есть модель User
//
// // Получение всех пользователей
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
//
// // Поиск пользователей по параметрам
// router.get('/search', async (req, res) => {
//   const { name, location, job } = req.query;
//   let query = {};
//
//   if (name) query.name = new RegExp(name, 'i'); // Регулярное выражение для частичного поиска
//   if (location) query.location = new RegExp(location, 'i');
//   if (job) query.job = new RegExp(job, 'i');
//
//   try {
//     const users = await User.find(query);
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
//
// module.exports = router;
