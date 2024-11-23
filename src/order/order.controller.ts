
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Body, Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderMSG } from 'src/common/constants';
import { OrderDTO } from './dto/order.dto';


@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern(OrderMSG.CREATE)
  create(@Payload() orderDTO: OrderDTO) {
    return this.orderService.create(orderDTO);
  }

  @MessagePattern(OrderMSG.FIND_ALL)
  findAll() {
    return this.orderService.findAll();
  }

  @MessagePattern(OrderMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.orderService.findOne(id);
  }

  @MessagePattern(OrderMSG.UPDATE)
  update(@Payload() payload) {
    return this.orderService.update(payload.id, payload.passengerDTO);
  }

  @MessagePattern(OrderMSG.DELETE)
  delete(@Payload() id: string) {
    return this.orderService.delete(id);
  }
}
