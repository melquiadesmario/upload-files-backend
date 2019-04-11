const express = require('express')
const app = express()
const path = require('path')
const cors =  require('cors')
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cors())

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box)
    })
})

require('./uploadFileDB')

const port = process.env.PORT || 3001

app.use((req, res, next) => {
    req.io = io
    return next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

server.listen(port, () => console.log(`Server is running on port: ${ port }`))
