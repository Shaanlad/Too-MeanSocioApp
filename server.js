var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')
var app = express()
var sessions = require('./controllers/api/sessions')
var users = require('./controllers/api/users')

// require('./controllers/api/posts')(app)

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
	})
); // support encoded bodies

app.use('/api/users', users)
//app.use(require('./auth'))
app.use(require('./controllers/api/posts'))
app.use(require('./controllers/static'))
app.use('/api/sessions', sessions)

var server = app.listen(3000, function (){
	console.log('Server listening on port', 3000)
})
require('./websockets').connect(server)

// app.get('/api/posts', function (req, res) {
// 	Post.find(function (err, post) {
// 		if (err) { return next(err) }
// 		res.json(200, post)
// 	})
// 	//res.sendFile('D:/Lad/Dry Run/MEAN/layouts/posts.html')
// })


// app.get('/', function (req, res) {
// 	// Post.find(function (err, post) {
// 	// 	if (err) { return next(err) }
// 	// 	res.json(200, post)
// 	// })
// 	res.sendFile('D:/Lad/Dry Run/MEAN/layouts/posts.html')
// })

// app.get('/api/posts', function (req, res, next) {
// 	Post.find()
// 	.sort('-date')
// 	.exec(function (err, posts) {
// 		if (err) { return next(err) }
// 		res.json(posts)
// 	})
// })

// app.post('/api/posts', function (req, res, next) {
// 	// console.log(req)
// 	// console.log(req.headers)
// 	// console.log('req.body.username')
// 	// console.log('req.body.body')
// 	var post = new Post({
// 		username: req.body.username,
// 		body: req.body.body
// 	})
// 	post.save(function (err, post) {
// 		if (err) { return next(err) }
// 		res.json(201, post)
// 	})
// 	console.log('Post received!')
// 	// res.send(201)
// })
