const express = require('express')
const webhook = require("./webhook-controller/webhook-controller");
const multer = require("multer")

const upload = multer();
const router = express.Router()

router.post("/webhook",upload.none(), webhook.websiteWebhook);


module.exports = router;
