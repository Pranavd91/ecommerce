import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Order } from 'src/entities/order.entity';
import { Subscription } from 'src/entities/subsciption.entity';
import { getMongoManager, getMongoRepository } from 'typeorm';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('* * * 30 * *')
    async updateDataSubscription(){
    
        this.logger.debug('Called at the end of the month');
        const ordersave = getMongoRepository(Order);
        const sub = getMongoRepository(Subscription);
        try {
            const subcription = await sub.find({
                where: {
                  status: {$eq: "Active"},
                }
              });
            //  console.log(subcription)
              subcription.forEach(element => {
                 // console.log"here)
                  const order= new Order();
                  order.phone=element.phone;
                  order.productId=element.productId;
                  ordersave.save(order);
              });

        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
}