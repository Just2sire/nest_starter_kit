/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(
    private readonly databaseservice: DatabaseService) {}
  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseservice.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.databaseservice.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseservice.user.findUnique({
      where: {
        id,
      }
    })
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseservice.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    })
  }

  remove(id: number) {
    return this.databaseservice.user.delete({
      where: {
        id,
      }
    })
  }
}
