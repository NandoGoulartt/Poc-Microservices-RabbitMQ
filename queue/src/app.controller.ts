import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async publishMessage(
    @Body('routingKey') routingKey: string,
    @Body('payload') payload: any,
  ) {
    console.log('publicando');

    await this.appService.publishMessage(routingKey, payload);
    return { message: 'Mensagem publicada com sucesso!' };
  }
}
