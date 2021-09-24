import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Movie extends BaseEntity{
  @PrimaryGeneratedColumn()
  @Field()
  id: number

  @Column()
  @Field()
  title: string

  @Column('int', {default: 60})
  @Field()
  minutes: number
}