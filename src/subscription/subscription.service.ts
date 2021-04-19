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
             var result=await manager.save(data);
 
         } catch (e) {
             throw new InternalServerErrorException(e);
         }
 
         return { show: { type: 'success', message: 'Subscription Data saved successfully' } ,result}
     }


     async updateDataProduct(realFilterDto: RealFilterDto): Promise<object> {
        const { phone, productId } = realFilterDto;
         const manager = getMongoRepository(Subscription);
         const data = await manager.findOne({  phone: phone})
         try {
             data.productId=productId
            var result= await manager.save(data);
 
         } catch (e) {
             throw new InternalServerErrorException(e);
         }
 
         return { show: { type: 'success', message: 'Subscription Product Data Updated successfully' } ,result}
     }

     async updateDataSubscription(realFilterDto: RealFilterDto): Promise<object> {
        const { phone, status } = realFilterDto;
         const manager = getMongoRepository(Subscription);
         const data = await manager.findOne({  phone: phone})
         try {
                data.status=status
               var result= await manager.save(data);
 
         } catch (e) {
             throw new InternalServerErrorException(e);
         }
 
         return { show: { type: 'success', message: 'Subscription Data Updated successfully' } ,result}
     }
}
