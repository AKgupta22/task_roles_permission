const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extention = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix + extention)
    }
})

const multerUpload = multer({ storage: storage })

module.exports = multerUpload