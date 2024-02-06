const router = require('express').Router()
const { imageGenerator } = require('../controller')
const { validateNewDetection } = require('../middleware')

router.get("/", function (req, res) { res.status(200).json({ status: "success" }); });
router.post('/image-generator', validateNewDetection, imageGenerator)
module.exports = router
