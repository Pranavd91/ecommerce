import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity("order")
export class Order  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    phone: number;

    @Column()
    productId: number;

}