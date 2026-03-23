const http = require("http")

const server = http.createServer((req, res) => {
    const pathName = req.url

    if(pathName === "/") {
        console.log("Incoming request:", pathName)
        res.end("You are in the Home Page...")
    } else  if(pathName === "/services") {
        console.log("Incoming request:", pathName)
        res.end("You are in the Services Page...")
    } else  if(pathName === "/contact") {
        console.log("Incoming request:", pathName)
        res.end("You are in the Contact Page...")
    } else {
        console.log("Deadend😭")
        res.end("404 - Page not found")
    }
})

server.listen(3000, () => {
     console.log("Listening to server on http://localhost:3000")
})