const express = require('express')
const path = require('path')
const WebSocket = require('ws')

const app = express()
const PORT = process.env.PORT || 3000 || 5001
const ENV = process.env.NODE_ENV || 'development'
// console.log('process.env.PORT----------------->', process.env.PORT)
// console.log('process.env.PORNODE_ENV----------------->', process.env.NODE_ENV)

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${String(PORT)} in (${ENV}).`)
})

const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
  console.log('New WebSocket connection')

  // Handle incoming WebSocket messages
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`)

    // Process the received message or broadcast it to other connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  })

  // Handle WebSocket connection close
  ws.on('close', () => {
    console.log('WebSocket connection closed')
  })
})
