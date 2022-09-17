export class Task {
  constructor(data) {
    this.id = data.id
    this.user = data.user
    this.description = data.description
    this.completed = data.completed

  }




  get TasksTemplate() {
    return /* HTML */ `
    <div class="d-flex justify-content-between">
      <input onchange="app.tasksController.toggleTask('${this.id}')" class="ms-2" type="checkbox" ${this.completed ? 'checked' : ''}>
      <div>
      ${this.description}
      </div>
      <i onclick="app.tasksController.deleteTask('${this.id}')" class="mdi mdi-close selectable"></i>
    </div>
    `
  }
}