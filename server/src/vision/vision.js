const vision = require('@google-cloud/vision')

const detectText = async (imageBuffer) => {
    const client = new vision.ImageAnnotatorClient();

    const [ result ] = await client.textDetection(imageBuffer)
    const detections = result.textAnnotations
    const [ text, ...others ] = detections

    return text
}

module.exports = detectText