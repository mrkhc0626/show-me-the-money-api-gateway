import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set a global route prefix
  app.setGlobalPrefix('api');

  await app.listen(6000);
}
bootstrap();
