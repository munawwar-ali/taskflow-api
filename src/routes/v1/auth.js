const router = require('express').Router();
const { body } = require('express-validator');
const ctrl = require('../../controllers/authController');
const authMw = require('../../middleware/auth');

router.post('/register',
  [body('email').isEmail(), body('password').isLength({ min: 6 }), body('name').notEmpty()],
  ctrl.register
);
router.post('/login',
  [body('email').isEmail(), body('password').notEmpty()],
  ctrl.login
);
router.get('/profile', authMw, ctrl.profile);

module.exports = router;