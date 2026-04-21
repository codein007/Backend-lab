const express = require('express');
const router = express.Router();

const { generateUrl } = require('../controllers/urlController');

router.post('/', generateUrl);

module.exports = router;