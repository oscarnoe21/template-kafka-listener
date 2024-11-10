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

CLIENT_ID_KAFKA=hn-lock-unlock-line

BROKERS_KAFKA=kf-cluster-kafka-bootstrap.msg.svc.cluster.local:9092

GROUPID_KAFKA=hn-lock-unlock-line

KAFKA_TOPIC_NAME=hn-lock-unlock-line

#variables de execute order

CHANNEL_ID=28

PRODUCT_ID=9002288

QUANTITY=1

OPERATION_UNLOCK=DESBLOQUEO_LINEA

IMEI=0

MARCA=MARCA

MODELO=MODELO

ACTIONCODE_UNLOCK=Resume

OPERATION_LOCK=BLOQUEO_LINEA

ACTIONCODE_LOCK=Suspend


#variables de url


URL_EXECUTE_ORDER=http://192.168.128.50:7004/ExecuteOrder/ExecuteOrderService?wsdl

URL_TOKEN=https://api.servers2.tigocloud.net/server/tokens

SUB_ID=11298656-b377-4c94-9544-19764238a3b6

APP_ID=852b13d1-7236-458a-8583-81d4c5e48aac

URL_EVENT_BROKER=https://prod.api.tigo.com/v2/tigo/eventbroker/campaigns

#variables de even broker

COUNTRY=HN

CUSTOMER_TYPE=b2B

CUSTOMER_ACTION=lock_and_unlock_line

EVENT_NAME_LOCK=b2b_lock_Line

EVENT_CODE_LOCK=HN-B2B-LOCK-LINE

EVENT_DESCIPTION_LOCK=Evento de Bloqueo de linea

EVENT_SOURCE=EVENT_BROKER

NATIONAL_ID_TYPE=NIT

EVENT_NAME_UNLOCK=b2b_unlock_Line

EVENT_CODE_UNLOCK=HN-B2B-UNLOCK-LINE

EVENT_DESCIPTION_UNLOCK=Evento de desbloqueo de linea


# variables de kafka de logger

BALANCE_PREFIX=504

MODULE_LOGGING_APPLICATION_ENABLE=true

MODULE_LOGGING_APPLICATION_LEVEL=debug

MODULE_LOGGING_APPLICATION_LOGLEVEL=CONSOLE,EVENT

MODULE_LOGGING_APPLICATION_KAFKA_CLIENTID=logger

MODULE_LOGGING_APPLICATION_KAFKA_SERVER=kf-cluster-kafka-bootstrap.msg.svc.cluster.local:9092

MODULE_LOGGING_APPLICATION_KAFKA_TOPIC=logger


# Variables del email service

FROM=noreplay@tigo.com.hn
CC=luis.chicas@tigo.com.hn
SUBJECT_LOCK=Solicitud de Bloqueo
SUBJECT_UNLOCK=Solicitud de desbloqueo
URL_EMAIL_SERVICE=http://192.168.161.61:7006/EmailService/EmailService?wsdl