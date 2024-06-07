const router = require('express').Router()
const { uploadDocs } = require('../controllers/upload.controllers')
const multerUpload = require('../middlewares/multer.middleware')
const { canUserUpload } = require('../middlewares/userPermission.middleware')


router.post('/upload', canUserUpload, multerUpload.single('file'), uploadDocs)

module.exports = router