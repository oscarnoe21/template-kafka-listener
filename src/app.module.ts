import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdaptersService } from './services/adapters.service';
import { KafkaService } from './services/kafka.service';

@Module({
  imports: [ 

    ConfigModule.forRoot({
    isGlobal: true,
  }),],
  controllers: [],
  providers: [AdaptersService,KafkaService],
})
export class AppModule {}
