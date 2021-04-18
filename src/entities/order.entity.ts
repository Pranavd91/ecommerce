import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity("order")
export class Order  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    BatterySno: string;

    @Column()
    MacId: string;

    @Column()
    BatteryState: string;

    @Column()
    TimeStamp: number;

    @Column()
    Voltage: number;

    @Column()
    Temperature: number;

    @Column()
    Current: number;

    @Column()
    CycleCount: number;

    @Column()
    Ahin: number;

    @Column()
    Ahout: number;

    @Column()
    SoC: number;

    @Column()
    TTE: number;

    @Column()
    ElectrolyteLevel: number;

    @Column()
    TotalPenalty: number;

    @Column()
    SpecificGravity: number;

    @Column()
    FloatPenalty: number;

    @Column()
    NormalPenality: number;
  
    @Column()
    PSOC: number;
   
    @Column()
    ElectrolyteLevelPenality: number;

    @Column()
    OverVoltagePenality: number;

    @Column()
    Idle1Penality: number;

    @Column()
    Idle2Penalty: number;


}