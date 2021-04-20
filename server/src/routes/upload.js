const router = require('express').Router()

// import the tesseract package
const Tesseract = require('tesseract.js')

const multer = require('multer')

const vision = require('@google-cloud/vision')


const upload = multer({})



// route for file upload
router.post('/aadhaar/fileupload', upload.single('image'), async (req, res) => {
    try {

        const file = req.file

        let aadhaarData = {
            name: '',
            dob: '',
            gender: '',
            aadhaarNumber: ''
        }

        const imageBuffer = file.buffer

        const client = new vision.ImageAnnotatorClient();

        const [ result ] = await client.textDetection(imageBuffer)
        const detections = result.textAnnotations
        const [ text, ...others ] = detections

        let dataArray = text.description.split('\n')

        console.log(text.description)

        aadhaarData.name = dataArray[5]
        aadhaarData.dob = dataArray[6].split(':')[1]
        aadhaarData.gender = dataArray[7].split('/')[1]
        aadhaarData.aadhaarNumber = dataArray[8]
    

        res.send({ data : aadhaarData })

    } catch (error) {
        console.log(error)
    }
})



module.exports = router