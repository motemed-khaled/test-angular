import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/core/models/todo';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  form!: FormGroup;
  addtCard: boolean = true;
  myTodo: Todo[] = [];

  constructor(private formBuilder: FormBuilder,
    private authService: AuthServiceService,
  private todoService:TodoService) {
    this.generateForm();
     this.authService.myTodo.subscribe({
      next: (res) => {
         this.myTodo = res;
      }
    })
  }

  generateForm(): void{
    this.form = this.formBuilder.group({
      taskName:["" , [Validators.required]]
    })
  }

  onSubmit(): void{
    this.todoService.createTodo(this.form.value.taskName).subscribe({
      next: (res) => {
        const user = JSON.parse(localStorage.getItem("userinfo")!)
        this.authService.getTodos(user[0].username, user[0].password).subscribe({
          next: (res) => {
            this.myTodo = res;
          }
        })
      }
    })
    console.table()
  }

  deleteOne(id: number){
    this.todoService.deleteTodo(id).subscribe({
      next: (res) => {
        const user = JSON.parse(localStorage.getItem("userinfo")!)
        this.authService.getTodos(user[0].username, user[0].password).subscribe({
          next: (res) => {
            this.myTodo = res;
          }
        })
      }
    })
  }

  updateStatus(id:number){
    this.todoService.updateTodo(id).subscribe({
      next: (res) => {
        console.log(res)
        const user = JSON.parse(localStorage.getItem("userinfo")!)
        this.authService.getTodos(user[0].username, user[0].password).subscribe({
          next: (res) => {
            this.myTodo = res;
          }
        })
      }
    })
  }

  showAddCard(): void{
    this.addtCard=!this.addtCard
  }
}
