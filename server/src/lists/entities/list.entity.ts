import { Task } from 'src/tasks/entities/task.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity('lists')
export class List {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToMany(() => Task, (task) => task.list, {
    onDelete: 'CASCADE',
    eager: true,
    cascade: ['update'],
    orphanedRowAction: 'delete',
  })
  tasks: Task[];

  @Column()
  list_name: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
