import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Subscription } from 'src/entities/subsciption.entity';
import { getMongoManager, getMongoRepository } from 'typeorm';
import { RealFilterDto } from './dto/real-filter.dto';

@Injectable()
export class SubscriptionService {

    async saveData(realFilterDto: RealFilterDto): Promise<object> {
        const { phone, productId } = realFilterDto;
         const manager = getMongoRepository(Subscription);
         try {
             const data = new Subscription();
             data.phone=phone
             data.status="Active"
             data.productId=productId
             await manager.save(data);
 
         } catch (e) {
             throw new InternalServerErrorException(e);
         }
 
         return { show: { type: 'success', message: 'Subscription Data saved successfully' } }
     }
}
