const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth.middleware');
const agencyController = require('../controllers/agency.controller');
const { asyncRouteHandler } = require('../utils/route.utils');
const { upload } = require('../utils/multer.utils');

router.post('/login', asyncRouteHandler(agencyController.loginAgency));
router.use(authMiddleware('AGENCY'));

router.post('/register', asyncRouteHandler(agencyController.registerAgency));
router.post('/addPackage', upload.single('photo'), asyncRouteHandler(agencyController.addPackage));
router.get('/getAllPackages', asyncRouteHandler(agencyController.getAllPackages));

module.exports = router;
