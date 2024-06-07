const fileModel = require("../models/files.model");
const uploadFileToCloudinary = require("../services/cloudinaryUpload.services");

const uploadDocs = async (req, res) => {
    try {
        const { path } = req.file
        const { username } = req.body
        if (!path) return res.status(404).json({ message: "File not found" })
        if (!username) return res.status(400).json({ message: "Username is required" })
        const url = await uploadFileToCloudinary(path)
        // will add file in db
        const response = new fileModel({
            url: url,
            uploadedBy: username
        })
        await response.save()
        return res.json({ message: "Uploaded", url })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    uploadDocs
}