import { Response, Request } from "express";
import { FindByIdPatientService } from "../../services/patient/FindByIdPatientService";

export default class FindByIdPatientController {
  constructor (private findByIdPatientService: FindByIdPatientService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const patient = await this.findByIdPatientService.execute({id})
    return response.status(201).send(patient);
  }
}

export { FindByIdPatientController };
