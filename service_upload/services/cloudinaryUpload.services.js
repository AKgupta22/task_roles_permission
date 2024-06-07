const cloudinary = require('cloudinary').v2
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const uploadFileToCloudinary = async (pathname) => {
    try {
        if (!pathname) return null
        //upload file if pathname
        const response = await cloudinary.uploader.upload(pathname)
        fs.unlinkSync(pathname)
        return response.url
    }
    catch (err) {
        fs.unlinkSync(pathname)
        console.log(err);
        return null
    }
}

module.exports = uploadFileToCloudinary