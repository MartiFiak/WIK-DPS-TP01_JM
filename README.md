# WIK-DPS-TP01_JM

This project sets up a minimalist HTTP API in TypeScript, with the following features:

- Returns the request headers in JSON format when you make a GET /ping request.

- Responds with an empty response and a 404 code for any other route or method.

- The server listens on a configurable port via the PING_LISTEN_PORT environment variable (default port: 3000).

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/)

# Getting started
- Clone the repository
```
$ git clone https://github.com/MartiFiak/WIK-DPS-TP01_JM.git <project_path>
```

- Install dependencies
```
$ cd <project_path>
$ npm install
```

- Build & run the project
```
$ npx tsc
$ node build/index.js
```

# API
- Request
```
$ curl -i http://localhost:3000/ping
```

# Configuration
- Set a custom port
```
$ export PING_LISTEN_PORT=<PORT_TO_CUSTOM>
```
