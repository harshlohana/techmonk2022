const express = require("express");
const next = require('next');
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var morgan = require('morgan');
var path = require('path')
var rfs = require('rotating-file-stream') 

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

   
app.prepare().then(() => {

const server = express();
server.use(cors());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

    server.use(cookieParser());
    // required for passport
    server.use(
      session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
      })
    );

   
    var accessLogStream = rfs.createStream('techmonk.log', {
      interval: '1d', // rotate daily
      path: path.join(__dirname, 'logs')
    })

    server.use(morgan('combined', { stream: accessLogStream }))
 
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    
   server.listen(3000, (err) => {
      if (err) throw err;
      console.log(`server ready on 3000`);
    });

}).catch((err) => {
  console.error(err.stack)
  process.exit(1)
}) 
