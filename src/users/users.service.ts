import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(name: string) {
    return `Soy ${name}`;
  }
}
