import { UsersRepository } from "../../repositories/UsersRepository";
import { hash } from "bcrypt";
import {AppError} from "../../errors/AppError";

interface IRequest {
  name: string;
  password: string;
  email: string;
}

class  CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }:IRequest) : Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail({email});
    
    if (userAlreadyExists) {
      throw new AppError('User already exists', 401);
    }
    
    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({ name, email, password: passwordHash });
  }
}
export { CreateUserService };
