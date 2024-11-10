import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReadConsumer } from './read/ReadConsumer';
import { KafkaService } from './services/kafka.service';
import { ConfigService } from '@nestjs/config';
import { AdaptersService } from './services/adapters.service';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  const configService = new ConfigService();

  new ReadConsumer(new KafkaService(configService),configService, new AdaptersService(configService));

  await app.listen(3002);
}
bootstrap();
