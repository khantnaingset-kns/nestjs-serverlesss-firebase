import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserModel } from 'src/dynamoose/models';
import { FirebaseService } from 'src/firebase/firebase.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('user')
export class UserController {
  constructor(private readonly _firebaseService: FirebaseService) {}

  @Post()
  async createUser(@Body() data) {
    await UserModel.create({ id: uuidv4(), fcmRegisterToken: [data.token] });
  }

  @Get(':id')
  async sendMessageToUser(@Param('id') id: string) {
    const user = await UserModel.get(id);
    await this._firebaseService.sendMessage(user.fcmRegisterToken);
  }
}
