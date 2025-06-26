const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agency.controller');
const { asyncRouteHandler } = require('../utils/route.utils');

// router.use(authMiddleware('AGENCY'));

router.post('/register', asyncRouteHandler(agencyController.registerAgency));
router.post('/login', asyncRouteHandler(agencyController.loginAgency));
router.post('/addPackage', asyncRouteHandler(agencyController.addPackage));

module.exports = router;
