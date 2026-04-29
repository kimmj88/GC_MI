import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { winstonLogger } from './logger/winston.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(winstonLogger);

  const configService = app.get(ConfigService);

  const port = configService.get<string>('PORT');

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
  });

  winstonLogger.verbose(`Listening port ${port}`, {

  });

  await app.listen(port);
}
bootstrap();
