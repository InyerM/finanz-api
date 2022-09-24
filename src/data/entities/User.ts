import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string
  
  @Column({
    default: true
  })
  active: boolean

  @Column({
    unique: true
  })
  username: string
  
  @Column({
    unique: true
  })
  email: string
  
  @Column()
  password: string
  
  @Column({
    unique: true
  })
  phone: string
  
  @Column()
  dialCode: string

  @Column()
  born: Date
  
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}