import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const config = new DocumentBuilder()
    .setTitle('Transations API')
    .setDescription('API created to manage finance life.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const configService = app.get(ConfigService);

  SwaggerModule.setup('api', app, document);

  app.useLogger(app.get(Logger));

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
