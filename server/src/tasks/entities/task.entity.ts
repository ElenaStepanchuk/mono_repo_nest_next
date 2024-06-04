import { List } from 'src/lists/entities/list.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => List, (list) => list.tasks)
  @JoinColumn({ name: 'list_id' })
  list: List;

  @Column()
  task_name: string;

  @Column()
  description: string;

  @Column()
  deadline: Date;

  @Column({
    type: 'enum',
    enum: ['Medium', 'Low', 'High'],
    default: 'Medium',
  })
  priority: 'Medium' | 'Low' | 'High';

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
