const Model = require('../util/model')
const model = new Model()


/**
 * @returns prediction result & duration
 */
async function imageGenerator (req, res) {
  const start = new Date()
  const rawParam = req.body
  let result = []
  try {
    result = await model.generate(rawParam)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Internal server error' })
  }
  return res.status(200).json({
    duration: new Date() - start,
    result: result,
  })
}

module.exports = {
  imageGenerator
}
