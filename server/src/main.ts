import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AllExceptionFilter } from './exceptionsFilters/exception.filter';

const PORT = process.env.PORT || 7000;

const logger = new Logger('MAIN LOGGER, PORT:');
logger.log(PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
