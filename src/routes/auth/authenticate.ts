import {UsersRepository} from "../../repositories/UsersRepository";
import {AuthenticateUserController} from "../../controllers/auth/AuthenticateUserController";
import {AuthenticateUserService} from "../../services/auth/AuthenticateUserService";

export default (): AuthenticateUserController => {
  const usersRepository = new UsersRepository();
  const authenticateService = new AuthenticateUserService(usersRepository);
  return new AuthenticateUserController(authenticateService);
}
