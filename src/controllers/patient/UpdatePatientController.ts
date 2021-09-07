import { Response, Request } from "express";
import { UpdatePatientService } from "../../services/patient/UpdatePatientService";

class UpdatePatientController {
  constructor (private updatePatientService: UpdatePatientService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, phone, email, birthday, gender, height, weight } = request.body;
    await this.updatePatientService.execute({ id, name, phone, email, birthday, gender, height, weight});
    return response.status(200).send();
  }
}

export { UpdatePatientController };
