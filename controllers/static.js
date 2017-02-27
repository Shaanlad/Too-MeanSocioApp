var express = require('express')
var router = require('express').Router()

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))
router.get('/', function (req, res) {
	res.sendFile('D:/Lad/Dry Run/MEAN/layouts/app.html')
})

module.exports = router