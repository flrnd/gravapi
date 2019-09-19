# gravapi

Maintainable, production ready web application that provides an API endpoint for transforming email addresses into gravatar uris.

docker version at <https://github.com/flrnprz/gravapi-docker>

## About this repo

This app was developed for learning purposes, inspired in: <https://github.com/honeypotio/challenge/blob/master/tasks/be_001.md>

### Stack

* Node and Express.
* Babel.
* Commander.
* Rollup.
* Jest and Supertest.

### cli

```shell
Options:
  -v, --version       output the version number
  -s, --serve [port]  start the server and bind to [port] (default: 1234)
  -h, --help          output usage information

Examples:
  $ PORT=1337 gravapi-cli             use env variable PORT
  $ gravapi-cli -s                    use default port: 1234
  $ gravapi-cli -s 4321               use custom port: 4321
```
