import { Router } from "express";
import {
  renderTasks,
  createTasks,
  renderAbout,
  renderEdit,
  editTasks,
  deleteTasks,
  toggleTasks,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTasks);

router.get("/about", renderAbout);

router.get("/tasks/:id/edit", renderEdit);

router.post("/tasks/:id/edit", editTasks);

router.get("/delete/:id", deleteTasks);

router.get("/toggleDone/:id", toggleTasks);

export default router;
