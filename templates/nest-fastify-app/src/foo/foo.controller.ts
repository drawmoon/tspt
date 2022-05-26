import { Controller, Get } from '@nestjs/common';
import { FooService } from './foo.service';

@Controller()
export class FooController {
  constructor(private readonly appService: FooService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
