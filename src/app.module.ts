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
var f = require('util').format
var fs = require('fs');
var ca = [fs.readFileSync("rds-combined-ca-bundle.pem")];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: 'mongodb+srv://root:root@cluster0.5fdik.gcp.mongodb.net/BatterySensorData?retryWrites=true&w=majority',
      //url: 'mongodb://localhost:27017/demo',
      database: "cb",
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
   
    
  ],
  controllers: [  UserController, ProductController, SubscriptionController, OrderController],
  providers: [UserService, ProductService, OrderService, SubscriptionService],
})
export class AppModule {}
