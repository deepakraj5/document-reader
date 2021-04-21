const router = require('express').Router()

const multer = require('multer')

const detectText = require('../vision/vision')

const upload = multer({})



// route for aadhaar upload
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

        const text = await detectText(imageBuffer)

        let dataArray = text.description.split('\n')

        aadhaarData.name = dataArray[5]
        aadhaarData.dob = dataArray[6].split(':')[1]
        aadhaarData.gender = dataArray[7].split('/')[1]
        aadhaarData.aadhaarNumber = dataArray[8]
    

        res.send({ 
            data : aadhaarData,
            image: imageBuffer
        })

    } catch (error) {
        console.log(error)
    }
})


// route for pan upload
router.post('/pan/fileupload', upload.single('image'), async (req, res) => {
    try {

        const file = req.file

        let aadhaarData = {
            name: '',
            dob: '',
            gender: '',
            aadhaarNumber: ''
        }

        const imageBuffer = file.buffer

        const text = await detectText(imageBuffer)

        let dataArray = text.description.split('\n')

        aadhaarData.name = dataArray[5]
        aadhaarData.dob = dataArray[6].split(':')[1]
        aadhaarData.gender = dataArray[7].split('/')[1]
        aadhaarData.aadhaarNumber = dataArray[8]
    

        res.send({ data : aadhaarData })

    } catch (error) {
        console.log(error)
    }
})

// route for passport upload
router.post('/passport/fileupload', upload.single('image'), async (req, res) => {
    try {

        const file = req.file

        let aadhaarData = {
            name: '',
            dob: '',
            gender: '',
            aadhaarNumber: ''
        }

        const imageBuffer = file.buffer

        const text = await detectText(imageBuffer)

        let dataArray = text.description.split('\n')

        aadhaarData.name = dataArray[5]
        aadhaarData.dob = dataArray[6].split(':')[1]
        aadhaarData.gender = dataArray[7].split('/')[1]
        aadhaarData.aadhaarNumber = dataArray[8]
    

        res.send({ data : aadhaarData })

    } catch (error) {
        console.log(error)
    }
})



// route for driving license upload
router.post('/driving/fileupload', upload.single('image'), async (req, res) => {
    try {

        const file = req.file

        let drivingData = {
            name: '',
            dob: '',
            licenseNumber: '',
            address: ''
        }

        const imageBuffer = file.buffer

        const text = await detectText(imageBuffer)

        let data = text.description

        let namePos = data.search('Name')
        let numberPos = data.search('DI.No')
        let addressPos = data.search('Address')
        let dobPos = data.search('DO.B')

        let numberSet = data.substr(numberPos+6, 20)
        drivingData.licenseNumber = numberSet.split('\n')[0]

        let nameSet = data.substr(namePos, 20)
        drivingData.name = nameSet.split('\n')[1]

        let addressSet = data.substr(addressPos, 100)
        let addressArray = addressSet.split('\n')
        drivingData.address = addressArray[1] + '\n' + addressArray[2] + '\n' + addressArray[3]

        let dobSet = data.substr(dobPos, 20)
        drivingData.dob = dobSet.split('\n')[1]
    

        res.send({ 
            data : drivingData,
            image: imageBuffer
        })

    } catch (error) {
        console.log(error)
    }
})



module.exports = router