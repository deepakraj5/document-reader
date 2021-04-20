import React, { useState } from 'react'

// import the style file (css)
import '../styles/style.css'

// import the material ui dropzone
import { DropzoneArea } from 'material-ui-dropzone'

import { Button } from '@material-ui/core'

import AppService from '../service/AppService'

const Upload = () => {


    const [files, setFiles] = useState([])


    const handleUploadChange = (files) => {
        setFiles(files)
    }

    const handleUploadButton = async () => {
        try {

            let image = files[0]

            let formData = new FormData()

            formData.append('image', image)
            
            const res = await AppService.getAadhaar(formData)
            console.log(res.data.data)

        } catch (error) {
            
        }
    }


    return (
        <div>


        <h5>Upload your document</h5>

            <div className='upload-section'>
                <div className='jumbotron'>

                    <h6>Choose the type of document</h6>

                    <form>
                        <select className='custom-select'>
                            <option>Aadhaar Card</option>
                            <option>Pan Card</option>
                            <option>Passport</option>
                            <option>Driving License</option>
                        </select>
                    </form>

                    <div>

                        <DropzoneArea onChange={(file) => handleUploadChange(file)} />

                    </div>

                    <Button variant='contained' color='primary' onClick={handleUploadButton}>Upload</Button>

                </div>
            </div>


        </div>
    );
}

export default Upload