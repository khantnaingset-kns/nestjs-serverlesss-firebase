import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin/app';
import { FirebaseService } from './firebase.service';

@Module({
  providers: [FirebaseService],
})
export class FirebaseModule {
  constructor(configService: ConfigService) {
    admin.initializeApp({
      credential: admin.cert({
        clientEmail: configService.get('firebaseClientEmail'),
        privateKey: configService
          .get<string>('firebasePrivateKey')
          .replace(/\\n/g, '\n'),
        projectId: configService.get('firebaseProjectId'),
      } as admin.ServiceAccount),
    });
  }
}
