import { appState } from "../AppState.js"
import { tasksService } from "../Services/TasksServices.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"



function _drawTasks() {
  let template = ''
  appState.tasks.forEach(t => template += t.TasksTemplate)
  setHTML('tasks', template)
}


function _drawTaskCount() {
  // you need a separate array for all of the tasks that are completed (take a look at your model and see what property you may be able to use to do this) and you will draw that length
  const completedTasks = appState.tasks.filter(t => t.completed == true)

  setText('TotalTasks', completedTasks.length)

  setText('TasksLeft', appState.tasks.length)
}






export class TasksController {

  constructor() {
    this.getTasks()
    appState.on('tasks', _drawTasks)
    _drawTasks()
    appState.on('tasks', _drawTaskCount)
  }



  async getTasks() {
    try {
      await tasksService.getTasks()
    } catch (error) {
      console.error('[GetTasks]', error)
      Pop.error(error)
    }
  }


  // NOTE creates will always handle form data
  async handleSubmit() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)

      await tasksService.createTask(formData)

      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[Create Task]', error)
      Pop.error(error)
    }
  }




  deleteTask(taskId) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      tasksService.deleteTask(taskId)
    }
  }



  async toggleTask(id) {
    try {
      await tasksService.toggleTask(id)
    } catch (error) {
      console.error('[toggle task]', error)
      Pop.error(error)
    }
  }
}