import { SchedulerService } from "../../core/schedulerService";

const service = new SchedulerService();
const args = process.argv.slice(2);

if (args[0] === "listar") {
  console.log(service.list());
}

if (args[0] === "add") {
  const [data, hora1, hora2, ...descricao] = args.slice(1);

  if (!data || !hora1 || !hora2) {
    console.log("Uso: add data hora_inicio hora_fim descricao");
    process.exit(1);
  }

  const start = data + " " + hora1;
  const end = data + " " + hora2;

  service.add({
    start_datetime: start,
    end_datetime: end,
    description: descricao.join(" ")
  });
}
