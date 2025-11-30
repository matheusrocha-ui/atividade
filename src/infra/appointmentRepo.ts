import { db } from "./db";
import { Appointment } from "../domain/appointment";

export class AppointmentRepo {
  add(app: Appointment) {
    const stmt = db.prepare("INSERT INTO appointments (start_datetime, end_datetime, description) VALUES (?, ?, ?)");
    stmt.run(app.start_datetime, app.end_datetime, app.description);
  }

  list() {
    const stmt = db.prepare("SELECT * FROM appointments ORDER BY start_datetime");
    return stmt.all();
  }
}
