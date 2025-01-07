import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async publishMessage(@Body() appDto: AppDto) {
    const { routingKey, payload } = appDto;

    return await this.appService.publishMessage(routingKey, payload);
  }
}
