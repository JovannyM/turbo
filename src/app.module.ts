import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UniversityModule } from './university/university.module';

@Module({
  imports: [UserModule, UniversityModule],
})
export class AppModule {}
