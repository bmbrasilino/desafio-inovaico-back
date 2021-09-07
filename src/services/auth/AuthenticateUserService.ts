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
    name: string,
    email: string
  },
  token: string
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
    
    // @ts-ignore
    const tokenReturn: IRequest = {
      user: {
       user: user.name,
        email: user.email,
      },
      token,
    }
    // @ts-ignore
    return tokenReturn;
  }
}
export { AuthenticateUserService };
