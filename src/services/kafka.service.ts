
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Kafka, Producer, Consumer } from 'kafkajs';


@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
    public kafka: Kafka;
    public producer: Producer;
    public consumer: Consumer;


/**
 * 
 * @param configService 
 */
    constructor(private readonly configService: ConfigService) {

        this.kafka = new Kafka({
            clientId: this.configService.get('CLIENT_ID_KAFKA'),
            brokers: [this.configService.get('BROKERS_KAFKA')], 
        });
        

        this.producer = this.kafka.producer();
        this.consumer = this.kafka.consumer({ groupId: this.configService.get('GROUPID_KAFKA')});
    } 


    /**
     * Se conecta y suscribe a un topico kafka
     * @param topic Topico al que se va a suscribir
     * @param callback Funcion que se ejecuta al recibir un mensaje
     */
    async subscribeTopic(topicName: string, callback: (message: any) => void, partitionNumber: number) {
        await this.consumer.connect()
        await this.consumer.subscribe({ topic: topicName});
        
        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                callback({
                    topic: topic,
                    partition: partition,
                    offset: message.offset,
                    value: message.value.toString(),
                });
            },
        });
    }
    

    /**
     * Se desconecta del kafka
     */
    async disconnect() {
        await this.consumer.disconnect();
    }

    /**
     * Se conecta al kafka al iniciar el modulo
     */
    async onModuleInit() {
        await this.consumer.connect();
    }

    /**
     * Se desconecta del kafka al destruir el modulo
     */
    async onModuleDestroy() {
        await this.consumer.disconnect();
    }
}
