import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async publishMessage(
    routingKey: string,
    payload: any,
  ): Promise<{ success: boolean; message: string }> {
    try {
      console.log(`Publishing message to route "${routingKey}"`, payload);
      this.amqpConnection.publish('amq.direct', routingKey, payload);
      return {
        success: true,
        message: `Message successfully published to route "${routingKey}".`,
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to publish message: ${error.message}`,
      };
    }
  }
}
