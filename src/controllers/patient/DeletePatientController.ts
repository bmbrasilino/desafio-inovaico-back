import { Response, Request } from "express";
import { DeletePatientService } from "../../services/patient/DeletePatientService";

class DeletePatientController {
  constructor (private deletePatientService: DeletePatientService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.deletePatientService.execute({ id: request.params.id });
      return response.status(200).send();
    }catch (e) {
      return response.status(422).send();
    }
  }
}

export { DeletePatientController };
