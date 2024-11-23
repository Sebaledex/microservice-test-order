import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ORDER } from 'src/common/models/models';
import { OrderSchema } from './schema/order.schema';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';


@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ORDER.name,
        useFactory: () => OrderSchema,
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
