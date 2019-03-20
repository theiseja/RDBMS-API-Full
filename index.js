const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);
const server = express();
const PORT = 9090;

const cohortRouter = require('./data/routes/cohortRouter')
const studentRouter = require('./data/routes/studentRouter')

server.use(express.json());

server.use('/api/students', studentRouter)
server.use('/api/cohorts', cohortRouter)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
