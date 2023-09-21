import { Injectable } from '@nestjs/common';
import { getMessaging } from 'firebase-admin/messaging';

@Injectable()
export class FirebaseService {
  async sendMessage(userRegisterToken: string[]): Promise<void> {
    const message = {
      data: {
        message: 'Hello this is a test message',
      },
      tokens: userRegisterToken,
    };

    const response = await getMessaging().sendEachForMulticast(message);

    console.log('Firebase response: ' + JSON.stringify(response));
  }
}
