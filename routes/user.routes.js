const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controller/user.controller');

// router.get('/:id', user_controller.user_details);
router.get('/details', user_controller.user_details);

router.get('/all', user_controller.findAll);

router.delete('/delete', user_controller.user_delete);


module.exports = router;



