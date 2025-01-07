import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'order_created',
    queue: 'order',
  })
  handleOrderCreatedMessage(message: any) {
    console.log(`Received message: ${JSON.stringify(message)}`);
  }
}
