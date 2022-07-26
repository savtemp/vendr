import { BurnController } from "./Controllers/BurnController.js";
import { SnacksController } from "./Controllers/SnacksController.js";



class App {
  snacksController = new SnacksController();
  burnsController = new BurnController();
}

window["app"] = new App();
