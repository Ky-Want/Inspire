import { generateId } from "../Utils/generateId.js";


export class Task {
  constructor(data) {
    this.id = data.id || generateId
    this.description = data.description
    this.taskId = data.taskId
    this.task = data.task
  }





  get Template() {
    return /* HTML */ `
      <div class="d-flex justify-content-between">
        <input onchange="app.tasksController.toggleTask('${this.id}')" class="ms-2" type="checkbox" ${this.task ? 'checked' : ''}>

        ${this.description}

        <i onclick="app.tasksController.deleteTask('${this.id}')" class="mdi mdi-close selectable"></i>
      </div>
    `
  }
}