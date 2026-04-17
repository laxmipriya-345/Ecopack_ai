const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getRecommendation,
  getHistory,
  getMaterials,
} = require('../controllers/recommendationController');

router.get('/materials', auth, getMaterials);
router.post('/recommendations', auth, getRecommendation);
router.get('/recommendations/history', auth, getHistory);

module.exports = router;
