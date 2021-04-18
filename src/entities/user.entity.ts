import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity("user")
export class User  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    subscription: [];

    @Column()
    phone: number;

    @Column()
    address: number;



}