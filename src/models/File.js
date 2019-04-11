const mongoose = require('mongoose')

const FileShcema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        path: { type: String, required: true }
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
)

FileShcema.virtual('url').get(function(){
    const url = process.env.URL || 'http://localhost:3001'
    return `${ url }/files/${ encodeURIComponent(this.path) }`
})

module.exports = mongoose.model('File', FileShcema)
