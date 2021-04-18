import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity("subscription")
export class Subscription  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    phone: number;

    @Column()
    productId: number;

    @Column()
    status: string;

}