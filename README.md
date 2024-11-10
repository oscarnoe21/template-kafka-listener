## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## License

Nest is [MIT licensed](LICENSE).


# Variables de entorno 


#variables de kafka

CLIENT_ID_KAFKA=client_id

BROKERS_KAFKA=127.0.0.1:9092

GROUPID_KAFKA=group_id

KAFKA_TOPIC_NAME=topic_name


# variables de kafka de logger

MODULE_LOGGING_APPLICATION_ENABLE=true

MODULE_LOGGING_APPLICATION_LEVEL=debug

MODULE_LOGGING_APPLICATION_LOGLEVEL=CONSOLE,EVENT

MODULE_LOGGING_APPLICATION_KAFKA_CLIENTID=logger

MODULE_LOGGING_APPLICATION_KAFKA_SERVER=127.0.0.1:9092

MODULE_LOGGING_APPLICATION_KAFKA_TOPIC=logger
