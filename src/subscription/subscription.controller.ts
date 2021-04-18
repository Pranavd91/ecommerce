import { Controller, Post, Put, Query } from '@nestjs/common';
import { RealFilterDto } from './dto/real-filter.dto';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
    constructor(
        private subscriptionService: SubscriptionService,
    ) { }
    @Post('create')
    saveData(@Query() realFilterDto: RealFilterDto) {
        return this.subscriptionService.saveData(realFilterDto);
    }

    @Put('updateProduct')
    updateData(@Query() realFilterDto: RealFilterDto) {
        return this.subscriptionService.updateDataProduct(realFilterDto);
    }

    @Put('updateSubscription')
    updateSubscription(@Query() realFilterDto: RealFilterDto) {
        return this.subscriptionService.updateDataSubscription(realFilterDto);
    }
}
