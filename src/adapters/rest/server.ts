import express from "express";
import { SchedulerService } from "../../core/schedulerService";

const app = express();
app.use(express.json());

const service = new SchedulerService();

app.get("/compromissos", (req, res) => {
  res.json(service.list());
});

app.post("/compromissos", (req, res) => {
  const { data, hora_inicio, hora_fim, descricao } = req.body;

  const start = data + " " + hora_inicio;
  const end = data + " " + hora_fim;

  service.add({
    start_datetime: start,
    end_datetime: end,
    description: descricao
  });

  res.json({ msg: "OK" });
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
