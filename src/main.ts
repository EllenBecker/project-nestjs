import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(bodyParser.json({ limit: '50mb' }));
  useContainer(app.select(AppModule), {fallbackOnErrors: true});

  await app.listen(1000);
}
bootstrap();
