import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false },
      exceptionFactory: (errors) => {
        console.log(errors);
      },
    }),
  );
  app.enableVersioning({ type: VersioningType.URI });
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Magic Transporters API')
    .setDescription('.........................................')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3000, () => {
    console.log('APP', `swagger docs started at http://localhost:${3000}`);
  });
}
bootstrap();
