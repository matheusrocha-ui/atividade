import { AppointmentRepo } from "../infra/appointmentRepo";
import { Appointment } from "../domain/appointment";

export class SchedulerService {
  repo = new AppointmentRepo();

  add(app: Appointment) {
    const existing = this.repo.list();

    for (let e of existing) {
      if (!(app.end_datetime <= e.start_datetime || app.start_datetime >= e.end_datetime)) {
        console.log("Erro: horário já ocupado!");
        return;
      }
    }

    this.repo.add(app);
    console.log("Compromisso salvo com sucesso!");
  }

  list() {
    return this.repo.list();
  }
}
