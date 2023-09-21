import { Injectable } from '@nestjs/common';

import { StorageService } from '../storage/storage.service';
import { UserCreateDto } from './user.dtos';

@Injectable()
export class UserService {
  constructor(private readonly storage: StorageService) {}

  async getAll() {
    return this.storage.user.findMany({ include: { university: true } });
  }

  async getById(id: string) {
    return this.storage.user.findUnique({ where: { id: id } /* select: { name: true } */ });
  }

  async create(user: UserCreateDto) {
    return this.storage.user.create({
      data: {
        name: user.name,
        location: user.location,
        universityId: user.universityId,
      },
    });
  }
}
