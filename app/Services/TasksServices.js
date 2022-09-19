import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js"
import { Pop } from "../Utils/Pop.js";
import { SandboxServer } from "./AxiosServices.js";


class TasksService {
  async getTasks() {
    const res = await SandboxServer.get('/api/KY/todos')
    appState.tasks = res.data.map(tasks => new Task(tasks))
  }




  async toggleTask(id) {
    let task = appState.tasks.find(task => task.id == id)
    if (!task) {
      throw new Error('Bad ID')
    }
    task.completed = !task.completed
    // send put request to the server
    const res = await SandboxServer.put(`/api/KY/todos/${id}`, task)
    appState.emit('tasks')
  }




  setActiveTask(id) {
    const task = appState.tasks.find(c => c.id == id)
    if (!task) {
      throw new Error('That is a bad Id')
    }
    appState.activeTask = task
  }




  async deleteTask(id) {
    const yes = await Pop.confirm('Delete this task?')
    if (!yes) { return }

    await SandboxServer.delete(`/api/KY/todos/${id}`)
    appState.tasks = appState.tasks.filter(t => t.id != id)
  }




  async createTask(formData) {
    const res = await SandboxServer.post('/api/KY/todos', formData)

    let task = new Task(res.data)
    appState.tasks = [...appState.tasks, task]
  }
}

export const tasksService = new TasksService()