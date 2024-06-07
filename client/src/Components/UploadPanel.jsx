import { useState } from "react"
import axiosInstance from "../utils/axios"

const UploadPanel = () => {
    const [file, setFile] = useState(null)

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('username', 'akash')
            console.log([...formData]);
            await axiosInstance.post('/upload', formData)
            alert('Uploaded')
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <label>Upload file</label>
                <input name="file" type="file" onChange={handleFileChange} required />
            </div>
            <button className="form_button" type="submit">Upload</button>
        </form>
    )
}

export default UploadPanel