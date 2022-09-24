import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from 'typeorm'
import { Budget } from './Budget'
import { User } from './User'

@Entity()
export class Expenses extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column()
  category: 'food' | 'transport' | 'entertainment' | 'health' | 'education' | 'other'

  @Column()
  amount: number

  @ManyToOne(() => User, user => user.id)
  user: number

  @ManyToOne(() => Budget, budget => budget.id)
  budget: number

  @Column()
  date: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}