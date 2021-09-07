import { Response, Request } from "express";
import { ListAllPatientService } from "../../services/patient/ListAllPatientService";

export default class ListAllPatientController {
  constructor (private listAllPatientService: ListAllPatientService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listAllPatientService.execute();
    return response.status(201).send(all);
  }
}

export { ListAllPatientController };
