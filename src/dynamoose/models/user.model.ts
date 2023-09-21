import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';

export class User extends Item {
  id: string;

  fcmRegisterToken: string[];
}

export const UserModel = dynamoose.model<User>('User', {
  id: String,
  fcmRegisterToken: { type: Array, schema: [String] },
});
