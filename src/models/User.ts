import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar', nullable: true })
  name: string | undefined;

  @Column({ type: 'varchar', nullable: true })
  email: string  | undefined;

  @Column({ type: 'varchar', nullable: true })
  password: string | undefined;

  @Column({ type: 'boolean', nullable: true })
  isAdmin: boolean | undefined;
  
  @CreateDateColumn()
  created_at: Date | undefined;
}
export {User};
