import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  getHello(): string {
    return 'Hello World!';
  }

  async publishMessage(routingKey: string, payload: any): Promise<void> {
    console.log(`Publicando mensagem na rota "${routingKey}"`, payload);
    this.amqpConnection.publish('amq.direct', routingKey, payload);
  }
}
