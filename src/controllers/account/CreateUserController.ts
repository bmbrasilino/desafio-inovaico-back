import { Response, Request } from "express";
import { CreateUserService } from "../../services/account/CreateUserService";

class CreateUserController {
  constructor (private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    await this.createUserService.execute({ name, email, password });
    return response.status(201).send();
  }
}

export { CreateUserController };
