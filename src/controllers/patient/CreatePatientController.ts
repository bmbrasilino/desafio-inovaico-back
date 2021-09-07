import { Response, Request } from "express";
import { CreatePatientService } from "../../services/patient/CreatePatientService";

class CreatePatientController {
  constructor (private createPatientService: CreatePatientService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
      const { name, phone, email, birthday, gender, height, weight } = request.body;
      await this.createPatientService.execute({ name, phone, email, birthday, gender, height, weight});
      return response.status(201).send();
  }
}

export { CreatePatientController };
