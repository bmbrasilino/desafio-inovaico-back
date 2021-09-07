import {UsersRepository} from "../../repositories/UsersRepository";
import {CreateUserController} from "../../controllers/account/CreateUserController";
import {CreateUserService} from "../../services/account/CreateUserService";

export default (): CreateUserController => {
  const usersRepository = new UsersRepository();
  const createUserService = new CreateUserService(usersRepository);
  return new CreateUserController(createUserService);
}
