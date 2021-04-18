import { Controller, Post, Query } from '@nestjs/common';
import { RealFilterDto } from './dto/real-filter.dto';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
    constructor(
        private subscriptionService: SubscriptionService,
    ) { }
    @Post('create')
    saveBatterySensor(@Query() realFilterDto: RealFilterDto) {
        return this.subscriptionService.saveData(realFilterDto);
    }
}
