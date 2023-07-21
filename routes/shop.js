const { Router } = require('express');
const model = require('../models/model');

const router = new Router();

router.get('/', async (req, res) => {
  const info = await model.findAll();
  res.json(info);
});

module.exports = router;