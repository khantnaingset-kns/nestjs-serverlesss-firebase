import { Module } from '@nestjs/common';
import { initDynamoDB } from './models';
import { ConfigService } from '@nestjs/config';

@Module({})
export class DynamooseModule {
  constructor(configService: ConfigService) {
    initDynamoDB(configService.get('tableName'));
  }
}
