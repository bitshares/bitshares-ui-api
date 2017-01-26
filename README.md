Bitshares UI RESTful API
==================================

This is a simple RESTful API server for Bitshares based on [express-es6-rest-api](https://www.bithound.io/github/developit/express-es6-rest-api)

It provides the following data:

- Dashboard markets configuration by chain id.

## Included packages

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

Getting Started
---------------

```sh
# clone it
git clone git@github.com:bitshares/bitshares-ui-api.git
cd bitshares-ui-api

# Install dependencies
npm install

# Start development live-reload server
PORT=3000 npm run dev

# Start production server:
PORT=3000 npm start
```
Docker Support
------
```sh
cd bitshares-ui-api

# Build your docker
docker build -t es6/bitshares-ui-api .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 3000:3000 es6/bitshares-ui-api
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

Docker Demo
-------------------------
It's supposed to be pretty easy to take your Docker to your favourite cloud service, here's a demo of what's our Dockerized bolierplate is like: [https://docker-deployment-yudfxfiaja.now.sh/api](https://docker-deployment-yudfxfiaja.now.sh/api)

License
-------

MIT
