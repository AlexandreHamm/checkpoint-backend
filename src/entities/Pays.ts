import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

// On utilise "!" pour indiquer que la valeur ne peut pas être null
@Entity()
@ObjectType()
export class Pays {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  code!: string;

  @Column()
  @Field()
  nom!: string;

  @Column()
  @Field()
  emoji!: string;

  @Column()
  @Field()
  codeContinent!: string;
}