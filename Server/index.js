const express = require("express");

const app = express()

const server = require('http').createServer(app)

const io = require("socket.io")(server,{cors:{origin:"*"}})

app.get('/',(req,res)=>{
    res.send('Home')
})

server.listen(3001,()=>{
    console.log("Server running");
})

io.on('connection',(socket)=>{
    console.log("User Connected", socket?.id);

    socket.on("join",({name, room})=>{
        socket.join(room)
        console.log(name, "joined", room);
    })

    socket.on('message',(data)=>{
        socket.broadcast.to(data?.room).emit('message',data)
    })
})