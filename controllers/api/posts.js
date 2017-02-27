var Post = require('../../models/post')
var router = require('express').Router()

// console.log(router)
router.get('/api/posts', function (req, res, next) {
	Post.find()
	.sort('-date')
	.exec(function (err, posts) {
		if (err) { return next(err) }
		res.json(posts)
	})
})
router.post('/api/posts', function (req, res, next) {
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	})
	post.save(function (err, post) {
		if (err) { return next(err) }
		res.json(201, post)
	})
	console.log('Post received!')
	// res.send(201)
})

module.exports = router
