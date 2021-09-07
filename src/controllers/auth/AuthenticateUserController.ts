import { Response, Request } from "express";
import { AuthenticateUserService } from "../../services/auth/AuthenticateUserService";

class AuthenticateUserController {
  constructor (private authenticateUserService: AuthenticateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const token = await this.authenticateUserService.execute({ email, password });
    return response.json(token);
  }
}

export { AuthenticateUserController };
