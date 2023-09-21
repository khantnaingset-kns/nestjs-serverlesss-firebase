import * as dynamoose from 'dynamoose';
import { UserModel } from './user.model';

function initDynamoDB(tableName: string): void {
  new dynamoose.Table(tableName, [UserModel], { create: false, update: false });
}

export { initDynamoDB, UserModel };
