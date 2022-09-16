import { TasksController } from "./Controllers/TasksControllers.js";



class App {
  tasksController = new TasksController();
}

window["app"] = new App();
