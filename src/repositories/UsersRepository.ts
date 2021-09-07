import {getRepository, Repository} from "typeorm";
import {User} from "../models/User";
import {UserInterface} from "../interfaces/UserInterface";
import {CreateUserDTO} from "../interfaces/DTO/account/CreateUserDTO";
import {FindByEmailDTO} from "../interfaces/DTO/account/FindByEmailDTO";

class UsersRepository implements UserInterface {
  private repository: Repository<User>;
  
  constructor() {
    this.repository = getRepository(User);
  }
  
  async create({ name, email, password }: CreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, email, password });
    await this.repository.save(user);
  }

  async findByEmail({email}: FindByEmailDTO): Promise<User | undefined> {
    return await this.repository.findOne({email});
  } 
  
}

export { UsersRepository };
