const jsonServer = require('json-server');
const fakedata = require('./fake-data');
const server = jsonServer.create();
const router = jsonServer.router({ "posts": fakedata });
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
    setTimeout(next, 1000);
  });
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(3001, () => {
    console.log('JSON server is run');
})