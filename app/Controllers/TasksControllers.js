import { tasksService } from "../Services/TasksServices.js"
import { getFormData } from "../Utils/FormHandler.js"



export class TasksController {

  constructor() { }

  createTask(taskId) {
    console.log('creating task')
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newTask = getFormData(form)
      newTask.taskId = taskId
      tasksService.createTask(newTask)
    } catch (error) {
      console.log(error);
    }
  }



  deleteTask(taskId) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      tasksService.deleteTask(taskId)
    }
  }



  toggleTask(id) {
    tasksService.toggleTask(id)
  }
}