import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionCreateDto } from './dto/permission-create.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>
  ) {}
  async create(dto: PermissionCreateDto): Promise<Permission> {
    return this.permissionRepository.save(dto);
  }

  findAll(): Promise<Array<Permission>> {
    return this.permissionRepository.find();
  }
}
