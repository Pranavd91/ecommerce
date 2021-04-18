import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity("subscription")
export class Subscription  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    userid: string;

    @Column()
    productId: [];

    @Column()
    status: string;

}