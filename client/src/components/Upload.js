import React, { useState } from 'react'

// import the style file (css)
import '../styles/style.css'

// import the material ui dropzone
import { DropzoneArea } from 'material-ui-dropzone'

import { Button } from '@material-ui/core'

import AppService from '../service/AppService'

import { useHistory } from 'react-router-dom'


const Upload = () => {


    const [files, setFiles] = useState([])

    const [type, setType] = useState('Aadhaar Card')

    const history = useHistory()


    const handleUploadChange = (files) => {
        setFiles(files)
    }

    const handleUploadButton = async () => {
        try {

            let image = files[0]

            let formData = new FormData()

            formData.append('image', image)

            let res = ''
            
            if (type === 'Aadhaar Card') {
                res = await AppService.getAadhaar(formData)
                
                history.push('/aadhaar/data', {
                    userDetails: res.data.data,
                    image: res.data.image
                })
            }
            else if (type === 'Pan Card') {
                res = await AppService.getPanCard(formData)
                console.log(res.data.data)
                console.log(res.data.image)
            }
            else if (type === 'Passport') {
                res = await AppService.getPassport(formData) 
                console.log(res.data.data)
                console.log(res.data.image)
            }
            else if (type === 'Driving License') {
                res = await AppService.getDrivingLicense(formData)
                
                history.push('/driving/data', {
                    userDetails: res.data.data,
                    image: res.data.image
                })
            }

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
                        <select className='custom-select' value={type} onChange={e => setType(e.target.value)}>
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