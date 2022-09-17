import { ClocksControllers } from "./Controllers/ClocksControllers.js";
import { TasksController } from "./Controllers/TasksControllers.js";



class App {
  tasksController = new TasksController();

  clocksController = new ClocksControllers();
}

window["app"] = new App();
