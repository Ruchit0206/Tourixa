const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agency.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { asyncRouteHandler } = require('../utils/route.utils');

// router.use(authMiddleware('AGENCY'));

router.post('/register', asyncRouteHandler(agencyController));

module.exports = router;
