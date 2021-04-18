import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { HealthController } from './health/health.controller';
//import { TerminusModule } from '@nestjs/terminus';
import { UserController } from './user/user.controller';
import { ProductController } from './product/product.controller';
import { SubscriptionController } from './subscription/subscription.controller';
import { OrderController } from './order/order.controller';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { OrderService } from './order/order.service';
import { SubscriptionService } from './subscription/subscription.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ProductModule } from './product/product.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
var f = require('util').format
var fs = require('fs');
//var ca = [fs.readFileSync("rds-combined-ca-bundle.pem")];

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: 'mongodb+srv://root:root@cluster0.m2xcq.mongodb.net/demo?retryWrites=true&w=majority',
      useNewUrlParser: true,
      synchronize: false,
      logging: true,
      entities: ["dist/**/*.entity{.ts,.js}"],
      useUnifiedTopology: true,
    //  ssl:true,
    //  sslValidate: true,
    //  sslCA: ca
    }),
    UserModule,
    OrderModule,
    SubscriptionModule,
    ProductModule,
    TasksModule,
   
    
  ],
  controllers: [  UserController, ProductController, SubscriptionController, OrderController],
  providers: [UserService, ProductService, OrderService, SubscriptionService],
})
export class AppModule {}
