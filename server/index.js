var app =  require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/view', (req, res) => {
    res.sendFile(__dirname + '/display.html');
})


io.on('connection', () => {

})

var server_port = process.env.YOUR_POST || process.env.PORT || 5000;
http.listen(server_port, () => {
    console.log('Started on: ' + server_port);
})