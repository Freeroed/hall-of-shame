var liveServer = require("live-server");

var params = {
    port: 80, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "./dist", // Set root directory that's being served. Defaults to cwd.
    file: "index.html",
       
};
liveServer.start(params);