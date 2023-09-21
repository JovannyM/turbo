import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityCreateDto } from './university.dtos';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get()
  async getAll() {
    return await this.universityService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.universityService.getById(id);
  }

  @Post()
  async create(@Body() university: UniversityCreateDto) {
    return await this.universityService.create(university);
  }
}
