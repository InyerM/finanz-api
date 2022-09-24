import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Budget extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column()
  amount: number

  @Column()
  date: Date

  @ManyToOne(() => User, user => user.id)
  user: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}