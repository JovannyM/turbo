import { Module } from '@nestjs/common';
import { StorageModule } from '../storage/storage.module';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';

@Module({
  imports: [StorageModule],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
