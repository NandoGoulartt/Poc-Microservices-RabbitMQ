import { IsNotEmpty, IsIn, IsOptional } from 'class-validator';

export class AppDto {
  @IsNotEmpty()
  @IsIn(['order_created'], {
    message: 'routingKey must be either "order_created"',
  })
  routingKey: string;

  @IsOptional()
  payload: any;
}
