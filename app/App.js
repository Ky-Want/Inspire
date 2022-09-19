import { ClocksControllers } from "./Controllers/ClocksControllers.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksControllers.js";
import { WeatherController } from "./Controllers/WeatherController.js";



class App {
  tasksController = new TasksController();

  clocksController = new ClocksControllers();

  quotesController = new QuotesController();

  imagesController = new ImageController();

  weatherController = new WeatherController();
}

window["app"] = new App();
