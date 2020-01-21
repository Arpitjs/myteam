let express = require('express')
let router = express.Router()
let appController = require('../controller/appController')
let authController = require('../controller/authController')

router.get('/hello', appController.hello)
router.get('/', appController.getOverview)
router.get('/programs', appController.programs)
router.get('/login', appController.login)

router.get('/users', authController.protect, authController.restrictTo(), appController.getAllUsers)
router.post('/signUp', authController.signUp)
router.post('/login', authController.login)

module.exports = router