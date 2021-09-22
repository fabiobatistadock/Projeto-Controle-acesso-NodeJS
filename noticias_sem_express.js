var http = require('http')

var server = http.createServer((req,res) => {
    var categoria = req.url
    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de Tecnologia</body></html>")
        console.log('Acessando http://localhost/tecnologia')
    }else if(categoria == '/moda'){
        res.end("<html><body>Noticias de Moda</body></html>")
        console.log('Acessando http://localhost/moda')
    }else if(categoria == '/beleza'){
        res.end("<html><body>Noticias de Beleza</body></html>")
        console.log('Acessando http://localhost/beleza')
    }else{
        res.end("<html><body>Portal de Noticias</body></html>")
        console.log('Acessando http://localhost:3000')
    }
})

server.listen(3000)