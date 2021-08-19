var express = require('express');
var router = express.Router();

var post_controller = require('../controller/post.controller');
router.get('/', post_controller.getPost)

router.post('/add',post_controller.addPost )

router.put('/rate/:id',post_controller.ratePost)

router.get('/getAverageRate/:id',post_controller.getAverageRate)

router.patch('/update/:id',post_controller.updatePost)

router.delete('/delete/:id',post_controller.deletePost)
  


module.exports = router;