import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOrder } from 'src/common/interfaces/order.interface';
import { ORDER } from 'src/common/models/models';
import { OrderDTO } from './dto/order.dto';


@Injectable()
export class OrderService {
  constructor(
    @InjectModel(ORDER.name) private readonly model: Model<IOrder>,
  ) {}

  async create(orderDTO: OrderDTO): Promise<IOrder> {
    const newPassenger = new this.model(orderDTO);
    return await newPassenger.save();
  }

  async findAll(): Promise<IOrder[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IOrder> {
    return await this.model.findById(id);
  }

  async update(id: string, orderDTO: OrderDTO): Promise<IOrder> {
    return await this.model.findByIdAndUpdate(id, orderDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
