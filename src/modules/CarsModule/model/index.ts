import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  name!: string;

  @Column({ unique: true })
  picture!: string;
  
  @Column()
  rate!: number; 
   
  @Column()
  year!: number; 

  @Column()
  tspeed!: number; 
 
  @Column()
  distance!: number; 
  
  @Column()
  fuelType!: string;

  @Column()
  seats!: number;

  @Column()
  class!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
