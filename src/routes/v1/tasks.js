const router = require('express').Router();
const { body } = require('express-validator');
const ctrl = require('../../controllers/taskController');
const authMw = require('../../middleware/auth');

router.use(authMw); // all task routes require auth

router.post('/', [body('title').notEmpty()], ctrl.create);
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;