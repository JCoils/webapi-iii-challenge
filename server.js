const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const cors = require("cors");

const userRoutes = require("./users/userRouter")
const postRoutes = require("./posts/postRouter")

const server = express();
server.use(cors());

server.use(express.json());
server.use(cors())
server.use(helmet());
server.use(logger);

server.use('/users', userRoutes );
server.use('/posts', postRoutes);


server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware




function logger(req, res, next) {
  console.log(`A ${req.method} request to '${req.url}' at '${Date.now()}'`);
  next();
};

module.exports = server;
