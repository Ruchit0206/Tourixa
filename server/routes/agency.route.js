const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth.middleware');
const agencyController = require('../controllers/agency.controller');
const { asyncRouteHandler } = require('../utils/route.utils');


router.post('/login', asyncRouteHandler(agencyController.loginAgency));
router.use(authMiddleware('AGENCY'));

router.post('/register', asyncRouteHandler(agencyController.registerAgency));
router.post('/addPackage', asyncRouteHandler(agencyController.addPackage));

module.exports = router;
