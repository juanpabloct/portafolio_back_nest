import { TypedRoute, TypedQuery } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
interface User {
  /**
   * @maxLength 10
   *  @message No valido
   */
  name: string;
}
const { Get } = TypedRoute;
@Controller('users')
export class UsersController {
  constructor(private User: UsersService) {}
  @Get()
  getUsers(@TypedQuery() { name }: User) {
    console.log(name);

    return this.User.getUsers(name);
  }
}
