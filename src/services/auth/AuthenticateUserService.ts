import { UsersRepository } from "../../repositories/UsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import {AppError} from "../../errors/AppError";

interface IRequest {
  password: string;
  email: string;
}

interface IResponse {
  user: {
    name: string | undefined,
    email: string  | undefined
  },
  token: string  | undefined
}

class  AuthenticateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ email, password }:IRequest) : Promise<IResponse> {
    const user = await this.usersRepository.findByEmail({email});

    if (!user) {
      throw new AppError('Email or password incorrect!', 401);
    }

    // @ts-ignore
    const passwordMatch = await compare(password, user.password);
    
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!', 401);
    }
    
    const token = sign({}, "48fef692f6250513624c67c57e7feea2", {
      subject: user.id,
      expiresIn: "1d"
    });
    
    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    }
    
    return tokenReturn;
  }
}
export { AuthenticateUserService };
