import { Consumer, KafkaClient } from 'kafka-node';

const client = new KafkaClient({ kafkaHost: 'localhost:9092' });


// Crear un consumidor
const consumer = new Consumer(client, [{ topic: 'nombre_del_tema', partition: 0 }], { autoCommit: false });

// Escuchar mensajes
consumer.on('message', function (message) {
    console.log(message);
});

// Manejar errores
consumer.on('error', function (err) {
    console.error('Error:', err);
});