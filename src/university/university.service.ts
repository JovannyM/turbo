import { Injectable } from '@nestjs/common';

import { StorageService } from '../storage/storage.service';
import { UniversityCreateDto } from './university.dtos';

@Injectable()
export class UniversityService {
  constructor(private readonly storage: StorageService) {}

  async getAll() {
    return this.storage.university.findMany({ include: { students: true } });
  }

  async getById(id: string) {
    return this.storage.university.findUnique({ where: { id: id } /* select: { name: true } */ });
  }

  async create(university: UniversityCreateDto) {
    return this.storage.university.create({
      data: {
        name: university.name,
      },
    });
  }
}
