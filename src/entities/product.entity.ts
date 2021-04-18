import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity("product")
export class Product  {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    id: string;

    @Column()
    productName: string;

    @Column()
    color: string;



}