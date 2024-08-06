import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  
  const config = new DocumentBuilder()
    .setTitle('Transations API')
    .setDescription('API created to manage finance life.')
    .setVersion('1.0')    
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useLogger(app.get(Logger));

  await app.listen(3000);
}
bootstrap();
