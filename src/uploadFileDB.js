const mongoose = require('mongoose')

// const URI = 'mongodb://localhost:27017/upload-files'
const URI = 'mongodb://melmario:melmario1234@ds133084.mlab.com:33084/upload-files'

mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => console.log('DB is connected'))
    .catch((err) => console.log(err))

module.exports = mongoose
