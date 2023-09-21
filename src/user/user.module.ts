import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { StorageModule } from '../storage/storage.module';
import { UserService } from './user.service';

@Module({
  imports: [StorageModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
