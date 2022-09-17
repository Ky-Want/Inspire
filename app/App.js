import { ClocksControllers } from "./Controllers/ClocksControllers.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksControllers.js";



class App {
  tasksController = new TasksController();

  clocksController = new ClocksControllers();

  quotesController = new QuotesController();
}

window["app"] = new App();
