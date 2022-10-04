import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Details {
  @Column()
  postid: number;
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  body: string;
}