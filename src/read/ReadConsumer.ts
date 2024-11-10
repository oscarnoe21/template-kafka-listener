import { ConfigService } from "@nestjs/config";
import { AdaptersService } from "../services/adapters.service";

import { KafkaService } from "../services/kafka.service";
import { RequestMessageKafkaMessage } from "../dto/requestMessageKafkaMessage";
import { logging } from "npm-logging-ts";

interface KafkaMessage {
  topic: string;
  partition: number;
  offset: string;
  value: string;
}

export class ReadConsumer {
  constructor(private readonly kafkaService: KafkaService,
    private readonly configService: ConfigService,
    private readonly adaptersService: AdaptersService
  ) {
    this.consumeMessage(this.configService.get('KAFKA_TOPIC_NAME'));
  }


  /**
   * 
   * @param msg Metodo que procesa el mensaje de kafka
   * @returns 
   */
  async executeMessage(msg) {
    try {

      const kafkaMessage: KafkaMessage = msg as KafkaMessage;

      const message: RequestMessageKafkaMessage = JSON.parse(kafkaMessage.value);
      /*
      internalId?: string;
    externalId?: string;
    transactionId?: string;
    userId?: string;*/
      logging.business("modulo","description", message, 0, 10000, { internalId:'123', externalId:'123', transactionId:'123', userId:'123'});
      console.log('Message Leido:', message);
      //TODO acciones a realizar con el mensaje
      return 'Started consuming messages from Kafka';
    } catch (error) {
      console.error('Error:', error);
      return 'Error occurred while consuming messages from Kafka';
    }
  }

  /**
   *  Metodo que consume mensajes de kafka
   * @param name  Nombre del topico
   * @returns  
   */
  async consumeMessage(name: string): Promise<string> {
    this.kafkaService.subscribeTopic(name, (message) => {
      this.executeMessage(message);
    },  Number.parseInt(this.configService.get('PARTITION_KAFKA')));
    return 'Started consuming messages from Kafka';
  }

  async onModuleInit() {
    await this.kafkaService.onModuleInit();
  }

  async onModuleDestroy() {
    await this.kafkaService.onModuleDestroy();
  }
}
