import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.tasksLeft = data.tasksLeft
  }






  get Template() {
    return /* HTML */`
    <form class="col-3 mb-3">
      <div class="card todoCard">
        <div class="card-body">

          <div class="d-flex justify-content-around mb-3">
            <h3>Todo List</h3>
            <h5>${this.tasksLeft} left</h5>
          </div>

          <div class="d-flex justify-content-between">
            <input onchange="app.tasksController.toggleTask()" class="ms-2" type="checkbox">
              <div>${this.name}</div>
              <i onclick="app.tasksController.deleteTask()" class="mdi mdi-close selectable"></i>
          </div>

          <div class="form-group d-flex justify-content-between border-bottom border-2 mt-5">
            <input class="task-input" type="text" name="description" placeholder="Add Task...">

              <button class="btn" type="submit">
                <i class="mdi mdi-plus" onsubmit="app.tasksController.createTask()"></i>
              </button>
          </div>
        </div>
      </div>
    </form>
    `
  }




  // get Tasks() {
  //   let template = ''
  //   let tasks = appState.tasks.filter(t => listId == this.id)
  //   tasks.forEach(t => template += t.Template)
  //   return template
  // }
}