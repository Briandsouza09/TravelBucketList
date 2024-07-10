import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from './todoList'

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todolist: any = data
  toEditTask: string = ""
  show:string="none";

  deleteTask(task: string) {
    this.todolist = this.todolist.filter((item: string) => item !== task);
  }

  addTask(newTask: string) {
    if (!this.todolist.includes(newTask)) {
      this.todolist.push(newTask);
    } else {
      alert("Task already exists!")
    }
  }

  startEdit(task: string) {
    this.toEditTask = task
    this.show = "block"
  }
  editTask(task: string) {
    const index = data.indexOf(this.toEditTask);
    data[index] = task;
    this.show="none"
    this.toEditTask=""
  }
}