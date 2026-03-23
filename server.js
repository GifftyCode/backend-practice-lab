const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Welcome to the Home Page!")
    } else if(req.url === '/about'){
        res.end("Welcome to the About Page!")
    } else {
        res.end("404 - Page not Found!")
    }
})

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})