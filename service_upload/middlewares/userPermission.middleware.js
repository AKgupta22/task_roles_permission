const canUserUpload = (req, res, next) => {
    try {
        const userRole = req.headers['role']
        if (userRole === 'Role A') {
            next()
        }
        else {
            res.status(400).json({ message: "Not authorized" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    canUserUpload
}