import {CreateUserDTO} from "./DTO/account/CreateUserDTO";
import {User} from "../models/User";
import {FindByEmailDTO} from "./DTO/account/FindByEmailDTO";

interface UserInterface {
  create(data: CreateUserDTO): Promise<void>;
  findByEmail({email}: FindByEmailDTO): Promise<User | undefined>;
}

export {UserInterface};
