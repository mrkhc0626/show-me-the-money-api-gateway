## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Show Me the Money API Gateway
Make sure you have to pull XERO Data first

Mock Data is redirecting to PORT 6001 instead of 3000
API Gateway should be PORT 6000

## Installation

```bash
$ npm install
```

## Prerequisites

Docker UP 

```bash
$ docker pull jaypeng2015/show-me-the-money
$ docker run -p 6001:3000 --name xero-service jaypeng2015/show-me-the-money
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# use docker to run
$ docker build -t show-me-the-money-api-gateway .
$ docker run -p 4000:4000 -e XERO_API_HOST=http://host.docker.internal:6001 show-me-the-money-api-gateway
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
