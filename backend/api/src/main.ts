import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import helmet from 'helmet';

import {
  ValidationPipe,
} from '@nestjs/common';

import { HttpExceptionFilter }
  from './common/filters/http-exception.filter';

import {
  SwaggerModule,
  DocumentBuilder,
} from '@nestjs/swagger';

async function bootstrap() {
  const app =
    await NestFactory.create(AppModule);

  // Security
  app.use(helmet());

  // CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Global Error Handling
  app.useGlobalFilters(
    new HttpExceptionFilter(),
  );

  // Swagger Docs
  const config =
    new DocumentBuilder()
      .setTitle('JobNova API')
      .setDescription(
        'JobNova backend API',
      )
      .setVersion('1.0')
      .addBearerAuth()
      .build();

  const document =
    SwaggerModule.createDocument(
      app,
      config,
    );

  SwaggerModule.setup(
    'docs',
    app,
    document,
  );

  // Start Server
  await app.listen(4000);

  console.log(
    'Server running on http://localhost:4000',
  );

  console.log(
    'Swagger docs: http://localhost:4000/docs',
  );
}

bootstrap();